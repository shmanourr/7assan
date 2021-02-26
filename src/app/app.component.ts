import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( 
    private userSrv : UserService,
    private authServ : AuthService ,
     private route : ActivatedRoute , 
     router : Router)
  {
    this.authServ.user$.subscribe( user => {
      if(user) {
        this.userSrv.save(user);
        let returnUrl = this.route.snapshot.queryParamMap.get('returrnUrl') || '/';
        router.navigateByUrl(returnUrl);
        
      }
    })
  }
}
