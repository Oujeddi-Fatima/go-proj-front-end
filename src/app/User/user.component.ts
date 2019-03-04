import { Component, Injector } from "@angular/core";
import { User } from "./user.model";
import { ILogger } from "../Utility/logger.component";
import { HttpClient } from "@angular/common/http";

@Component({
  templateUrl: "./user.view.html"
})
export class UserComponent {
  logObj: ILogger = null;
  constructor(_injector: Injector, public http: HttpClient) {
    this.logObj = _injector.get("1");
    this.logObj.log();
    this.getUserInfo();
  }
  user: User = new User();
  registeredUser: User = new User();
  message:String = "";

  hasError(controlName: string, typeOfValidator: string): boolean {
    return this.user.formGroup.controls[controlName].hasError(typeOfValidator);
  }

  add() {
    this.registeredUser = this.user;
    this.postToServer();
    this.message = "You have updated your prfile"
  }

  postToServer() {
    const cust: any = {};
    cust.firstName = this.registeredUser.firstName;
    cust.lastName = this.registeredUser.lastName;
    cust.email = this.registeredUser.email;
    cust.phoneNumber = this.registeredUser.phoneNumber;
    cust.dateOfBirth = this.registeredUser.dateOfBirth;
    cust.id = this.registeredUser.id;
    this.http
      .post("http://localhost:8080/user", cust)
      .subscribe(data => {}, err => console.debug(err));
  }

  getUserInfo() {
    this.http.get("http://localhost:8080/user/1").subscribe(
      (data: User) => {
        this.user.dateOfBirth = data.dateOfBirth;
        this.user.email = data.email;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.phoneNumber = data.phoneNumber;
        this.user.id = data.id;
      },
      err => console.debug(err)
    );
  }
}
