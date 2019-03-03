import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class User {
  firstName: String = "";
  lastName: String = "";
  email: String = "";
  phoneNumber: String = "";
  dateOfBirth: Date = null;

  formGroup: FormGroup = null;
  constructor(){
      var _builder = new FormBuilder();
      this.formGroup = _builder.group({});

    this.formGroup.addControl("email", new FormControl('', Validators.required)
    );
    this.formGroup.addControl("phoneNumber", new FormControl('', Validators.required)
    );
    this.formGroup.addControl("dateOfBirth", new FormControl('', Validators.required)
    );
    var validationCollection = [];
    validationCollection.push(Validators.required);
    //validationCollection.push(Validators.pattern('//^[0-9]{10,10}$//'));
  }
}
