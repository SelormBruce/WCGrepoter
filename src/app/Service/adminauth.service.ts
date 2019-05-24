import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { User } from 'firebase';
import { Subject } from 'rxjs';
import { Iauth } from '../iauth';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {
  user:User;
  subject = new Subject<boolean>();
  constructor(private afauth: AngularFireAuth, private router: Router) {
    this.afauth.authState.subscribe(user => {
      if (user) {
       this.user= user;
        localStorage.setItem('user', JSON.stringify(this.user));
      }

      else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(authdata:Iauth) {
    try {
      await this.afauth.auth.signInWithEmailAndPassword(authdata.email, authdata.password);
      this.isAuth();
    } catch (error) {
      alert("Error!" + error.message);
    }

  }


  logout() {

  }
  isAuth() {
    this.router.navigate(['/report-list']);
    return this.user != null;
  }

}
