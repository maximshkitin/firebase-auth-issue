import { Injectable }           from "@angular/core";
import { Router }               from "@angular/router";
import { Observable }           from "rxjs/Observable";
import { BehaviorSubject }      from 'rxjs/BehaviorSubject';
import { AngularFireAuth }      from 'angularfire2/auth';
import * as firebase            from "firebase/app";

@Injectable()
export class AuthService {

    loginError: any;

    constructor(public afAuth: AngularFireAuth, private router: Router) {
    }

    loginFb() {

        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider)
        .then( data => {
          // success
          console.log('Logged In')
          this.router.navigateByUrl('/dashboard')
        }).catch( error => {
          // error
          this.loginError = error.message;
          return error.message
        })

      }
    
    loginEmail(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then( data => {
          this.router.navigateByUrl('/dashboard')
        }).catch( error => {
           // error
        })
      }
    
    loginGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
        .then( data => {
          this.router.navigateByUrl('/dashboard')
        }).catch( error => {
        })
      }

    logout() {
        this.afAuth.auth.signOut()
        .then( data => {
          this.router.navigateByUrl('/login');
        })
        .catch( error => {
        })
    }

}