import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { IReport } from '../ireport';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {
  authmembers: IReport;
  errorMessage: string; error: any;

  constructor(public adminauth: AngularFireAuth, private router: Router) {



  }
  login(email: string, password: string) {
    this.adminauth.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        if (errorCode === 'uth/email-already-in-use') {
          alert('email-already-in-use.');
        }
        if (errorCode === 'auth/invalid-email') {
          alert('invalid-email.');
        }
        if (errorCode === 'auth/operation-not-allowed') {
          alert('operation-not-allowed.');
        } else {

        }
        alert(errorMessage);
      }
      console.log(error);
    }

    );



  }

}
