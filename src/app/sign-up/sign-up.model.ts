import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class SignUp {
  username: string = "";
  password: any = "";
  confirmPassword: any = "";
  isEmployer: boolean = false;

  formGroup: FormGroup = null;
  constructor() {
    var _builder = new FormBuilder();
    this.formGroup = _builder.group({});

    this.formGroup.addControl(
      "username",
      new FormControl("", Validators.required)
    );
    this.formGroup.addControl(
      "password",
      new FormControl("", Validators.required)
    );
    this.formGroup.addControl(
      "confirmPassword",
      new FormControl("", Validators.required)
    );
  }
}
