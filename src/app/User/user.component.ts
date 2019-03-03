import { Component, Injector } from "@angular/core";
import { User } from "./user.model";
import { ILogger } from "../Utility/logger.component";

@Component({
  //selector: 'user',
  templateUrl: "./user.view.html"
})
export class UserComponent {
  logObj: ILogger = null;
  constructor(_injector: Injector) {
    this.logObj = _injector.get("1");
    this.logObj.log();
  }
  user: User = new User();
  registeredUser: User = new User();
  hasError(controlName: string, typeOfValidator: string): boolean {
    return this.user.formGroup.controls[controlName].hasError(typeOfValidator);
  }

  add() {
    this.registeredUser = this.user;
    this.user = new User();
  }
}
