import { Component, OnInit, Injector } from "@angular/core";
import { User } from "./account.model";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { Address } from "../address/address.model";
@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styles: [
    `#dob{     padding-right : 0px;
                      padding-left : 0px; }`
  ]
})
export class AccountComponent implements OnInit {
  ngOnInit() {}
  userId: String = "";
  uri: string = "user";
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {
    if(this.authService.authModel.isEmployer){
      this.uri = "employer";
    }
    this.userId = this.authService.authModel.user.userId;
    this.getUserInfo();
  }
  user: User = new User();
  registeredUser: User = new User();
  message: String = "";

  hasError(controlName: string, typeOfValidator: string): boolean {
    return this.user.formGroup.controls[controlName].hasError(typeOfValidator);
  }

  add() {
    this.registeredUser = this.user;
    this.postToServer();
    this.message = "You have updated your prfile";
  }

  postToServer() {
    let ngbDate = this.registeredUser.formGroup.controls["dateOfBirth"].value;
    let dateOfBirth = this.ngbDateParserFormatter.format(ngbDate);
    const cust: any = this.authService.authModel.user;
    cust.firstName = this.registeredUser.firstName;
    cust.lastName = this.registeredUser.lastName;
    cust.email = this.registeredUser.email;
    cust.phoneNumber = this.registeredUser.phoneNumber;
    cust.dateOfBirth = dateOfBirth;
    cust.id = this.registeredUser.userId;
    cust.address = this.registeredUser.address;
    this.httpClient
      .postToServer(this.uri, cust)
      .subscribe(data => {}, err => console.log(err));
  }

  getUserInfo() {
    this.httpClient.getFromServer(this.uri + "/" + this.userId).subscribe(
      (data: User) => {
        this.user.formGroup.controls["dateOfBirth"].setValue(
          this.ngbDateParserFormatter.parse(data.dateOfBirth)
        );
        this.user.email = data.email;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.phoneNumber = data.phoneNumber;
        this.user.address = data.address;
        this.user.userId = data.userId;
      },
      err => console.log(err)
    );
  }
  addAddress(address: Address) {
    this.user.address = address;
  }
}
