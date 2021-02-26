import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from './userInfo';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(
    private UserSrv : UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }
  login() {
    // let returnUrl = this.route.snapshot.queryParamMap.get('returrnUrl') || '/';
    // localStorage.setItem('returnUrl' , returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  get AppUser$(): Observable<UserInfo> {
    return this.user$.switchMap(user => {
      if (user) {
        return this.UserSrv.getUser(user.uid).valueChanges();
      }
      else {
        return Observable.of(null);
      }
    })
    
  }


}
