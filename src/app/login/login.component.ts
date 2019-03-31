import { Component, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { FormGroup } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private httpClient: HttpClientService
  ) {}

  ngOnInit() {}

  login() {
    this.httpClient
      .getFromServerQueryParam("user", {
        username: this.authService.authModel.username,
        password: this.authService.authModel.password
      })
      .subscribe(
        (data : any) => {
          if (data != null) {
            this.authService.authModel.user = data;
            this.authService.authenticate();
          }
        },
        err => console.log(err)
      );
  }
}
