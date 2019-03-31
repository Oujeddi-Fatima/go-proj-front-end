import { Component, OnInit } from "@angular/core";
import { SignUp } from "./sign-up.model";
import { HttpClientService } from "../http-client.service";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { AuthenticationService } from "../authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html"
})
export class SignUpComponent implements OnInit {
  signUp: SignUp = new SignUp();
  constructor(
    private httpClient: HttpClientService,
    private authService: AuthenticationService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private router: Router
  ) {}

  ngOnInit() {}

  signup() {
    const newUser: any = {};
    newUser.username = this.signUp.username;
    newUser.password = this.signUp.password;
    let uri: string = "user";
    if (this.signUp.isEmployer) {
      uri = "employer";
    }
    this.httpClient.postToServer(uri, newUser).subscribe(
      (user)=>{
        this.router.navigate(["/login"]);
      },
      (err)=>{
        console.log(err)
      }
    );
  }
}
