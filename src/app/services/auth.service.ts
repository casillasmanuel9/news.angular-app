import { MensajesService } from './mensajes.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  displayName: string;
  email: string;

  private googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  constructor(private router: Router, private alertService: MensajesService) {}

  loginWithGoogle() {
    firebase
      .auth()
      .signInWithPopup(this.googleAuthProvider)
      .then(({ user }) => {
        this.token = user.uid;
        this.displayName = user.displayName;
        this.email = user.email;
        this.router.navigate(['/news'], { replaceUrl: true });
      })
      .catch((e) => this.alertService.alertError('Ooops..', e.message));
  }

  loginWithEmailPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          this.token = user.uid;
          this.displayName = user.displayName || 'noname';
          this.email = user.email;
          this.router.navigate(['/news'], { replaceUrl: true });
          resolve(true);
        })
        .catch((e) => {
          this.alertService.alertError('Ooops..', e.message);
          resolve(false);
        });
    });
  }

  async isLogged(): Promise<boolean> {
    return new Promise((resolve,reject) => {
      firebase.auth().onAuthStateChanged(async (user) => {
        if(user?.uid) {
          console.log(user);
          this.token = user.uid;
          this.displayName = user.displayName;
          this.email = user.email;
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    })
  }
}