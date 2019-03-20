import { Component, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import { AuthenticationService } from "../authentication.service";
@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  constructor(private authService: AuthenticationService) {
    console.log(authService.isAuthenticated())
  }

  ngOnInit() {}
}
