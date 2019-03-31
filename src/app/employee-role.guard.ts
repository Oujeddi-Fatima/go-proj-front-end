import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeRoleGuard implements  CanActivate{
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(!this.authService.authModel.isEmployer){
      this.authService.redirectUrl = "/";
      this.router.navigate(["/"]);
    }
    return this.authService.authModel.isEmployer;
  }
}
