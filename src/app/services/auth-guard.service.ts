import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService , private router: Router) { }
  canActivate( router , state : RouterStateSnapshot){
    return this.authService.user$.pipe(map(
      user => {
        if (user) { return true;}
        else
        {
          this.router.navigate(['/login'] , { queryParams : { returrnUrl : state.url }})
          return false;
        }
      }
    ))

  }
}
