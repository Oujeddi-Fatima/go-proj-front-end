import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

export class Address {
  street: String = "";
  city: String = "";
  state: String = "";
  zipCode: String = "";

  formGroup: FormGroup = null;
    constructor() {

      var _builder = new FormBuilder();
      this.formGroup = _builder.group({});
  
      this.formGroup.addControl(
        '',//field name
        new FormControl('', Validators.required)
      );
    }
}
