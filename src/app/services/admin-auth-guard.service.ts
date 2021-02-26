import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private authSrv: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authSrv.AppUser$.map((appUser: any) => appUser.isAdmin);
  }

}
