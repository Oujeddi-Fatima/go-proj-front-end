import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class Company {
  name: String = "";
  infoNumber: String = "";
  primeObjective: String = "";
  vision: String = "";
  mission: String = "";
  startDate: String = "";
  fax: String = "";
  businessType: String = "";
  
  formGroup: FormGroup = null;
    constructor() {
      var _builder = new FormBuilder();
      this.formGroup = _builder.group({});
  
      this.formGroup.addControl(
        "",//field name
        new FormControl("", Validators.required)
      );
    }
}
