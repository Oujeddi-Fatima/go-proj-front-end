import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Address } from "../address/address.model";

export class User {
  id: String;
  firstName: String = "";
  lastName: String = "";
  email: String = "";
  phoneNumber: String = "";
  dateOfBirth: string = "";
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
}
