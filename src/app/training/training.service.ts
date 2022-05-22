import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Subject, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Store } from '@ngrx/store';

import { Exercise } from "./exercise.model";
import { UIService } from "../shared/ui.service";
import * as UI from '../shared/ui.actions';
import * as fromTraining from './training.reducer';
import * as Training from "./training.actions";

export function compareByName(e1: Exercise, e2: Exercise) {
  return e1.name.localeCompare(e2.name)
};

@Injectable()
export class TrainingService {

  exerciseChanged = new Subject<Exercise|null>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();
  private availableExercises: Exercise[] = [];
  private runningExercise: Exercise | undefined | null;
  private fbSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UIService,
    private store: Store<fromTraining.State>
  ) {}

  fetchAvailableExercises() {
    this.store.dispatch(new UI.StartLoading());
    this.fbSubs.push(this.db
      .collection('availableExercises')
      .snapshotChanges()
      .pipe(
        // tap(docArray => console.log(docArray)),
        map(docArray => {
          // throw(new Error());
          return docArray.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...(doc.payload.doc.data() as Object)
            } as Exercise;
          })
        })
      )
      .subscribe((exercises: Exercise[]) => {
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Training.SetAvailableTrainings(exercises));
      }, error => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar('Fetching exercises failed, please try again later', undefined, 3000);
        this.exercisesChanged.next(undefined);
      }));
  }

  startExercise(selectedId: string) {
    this.store.dispatch(new Training.StartTraining(selectedId));
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise as Exercise,
      date: new Date(),
      state: 'completed'
    });
    this.store.dispatch(new Training.StopTraining());
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise as Exercise,
      duration: (this.runningExercise as Exercise).duration * (progress / 100),
      calories: (this.runningExercise as Exercise).calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.store.dispatch(new Training.StopTraining());
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  fetchCompletedOrCancelledExercises() {
    this.fbSubs.push(this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe(execises => {
        this.store.dispatch(new Training.SetFinishedTrainings(execises as Exercise[]));
      }));
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }
}
