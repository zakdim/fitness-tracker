import { Exercise } from "./exercise.model";

export function compareByName(e1: Exercise, e2: Exercise) {
  return e1.name.localeCompare(e2.name)
};

export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];

  private runningExercise: Exercise | undefined;

  getAvailableExercises() {
    return this.availableExercises.slice().sort(compareByName);
  }

  startExercise(selectedId: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
  }
}
