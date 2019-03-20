import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { authenticationModel } from "./authentication.model";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  redirectUrl: string = "/";
  authModel: authenticationModel = new authenticationModel();
  constructor(private router: Router) {}

  authenticate() {
    this.authModel.isAuthenticated = true;
    this.router.navigate([this.redirectUrl]);
  }

  isAuthenticated() {
    return this.authModel.isAuthenticated;
  }
}
