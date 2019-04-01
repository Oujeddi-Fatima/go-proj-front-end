import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { authenticationModel } from "./authentication.model";
import { HttpClientService } from "./http-client.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  redirectUrl: string = "/";
  authModel: authenticationModel = new authenticationModel();
  constructor(private router: Router, private httpClient: HttpClient) {}

  signOut() {
    this.authModel.isAuthenticated = false;
    this.authModel = new authenticationModel();
  }

  authenticate() {
    this.authModel.isAuthenticated = true;
    this.checkIfEmployer();
  }

  isAuthenticated() {
    return this.authModel.isAuthenticated;
  }

  checkIfEmployer() {
    return this.httpClient
      .get(this.authModel.user._links.employer.href)
      .subscribe((employer: any) => {
        if (employer != null) {
          this.authModel.user = employer;
          this.authModel.isEmployer = true;
        }
        this.router.navigate([this.redirectUrl]);
      });
  }
}
