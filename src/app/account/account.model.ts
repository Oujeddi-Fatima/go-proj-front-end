import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Address } from "../address/address.model";

export class User {
  userId: String;
  firstName: String = "";
  lastName: String = "";
  email: String = "";
  phoneNumber: String = "";
  dateOfBirth: any = "";
  address: Address = new Address();

  formGroup: FormGroup = null;
  constructor() {
    var _builder = new FormBuilder();
    this.formGroup = _builder.group({});

    this.formGroup.addControl(
      "email",
      new FormControl("", Validators.required)
    );
    this.formGroup.addControl(
      "phoneNumber",
      new FormControl("", Validators.required)
    );
    this.formGroup.addControl(
      "dateOfBirth",
      new FormControl("", Validators.required)
    );
    var validationCollection = [];
    validationCollection.push(Validators.required);
  }

  public getData() {
    const cust: any = {};
    cust.firstName = this.firstName;
    cust.lastName = this.lastName;
    cust.email = this.email;
    cust.phoneNumber = this.phoneNumber;
    cust.dateOfBirth = this.dateOfBirth.year
      ? this.dateOfBirth.year
      : "" + "-" + this.dateOfBirth.month
        ? this.dateOfBirth.month
        : "" + "-" + this.dateOfBirth.day ? this.dateOfBirth.day : "";
    cust.userId = this.userId;
    cust.address = this.address.getData();
    return cust;
  }
}
