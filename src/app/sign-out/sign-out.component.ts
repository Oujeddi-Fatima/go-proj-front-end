import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-out",
  template: ``
})
export class SignOutComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    public http: HttpClient
  ) {
    authService.signOut();
    this.router.navigate(["/login"]);
  }

  ngOnInit() {}
}
