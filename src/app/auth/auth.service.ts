import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | undefined | null;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth) { }

  registerUser(authData: AuthData) {
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // };
    this.afAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      console.log(result);
      this.authSuccessfully();
    })
    .catch(error => {
      console.log(error);
    });
  }

  login(authData: AuthData) {
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // };
    this.afAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      console.log(result);
      this.authSuccessfully();
    })
    .catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth(): boolean {
    return !!this.user;
  }

  private authSuccessfully() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
