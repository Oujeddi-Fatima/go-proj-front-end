import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import {AuthenticationService} from '../authentication.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public authService :AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("user logged in " + this.authService.authModel.username);
    this.authService.authenticate();
  }
}
