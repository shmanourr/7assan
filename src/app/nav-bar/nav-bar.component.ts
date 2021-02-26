import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { UserInfo } from '../services/userInfo';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

 appUser : UserInfo;

 constructor (private service: AuthService) {
   this.service.AppUser$.subscribe(newappUser => this.appUser=newappUser);
   console.log(this.appUser);
 }
 logOut()
 {
   this.service.logOut();
 }
 
}
