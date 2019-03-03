import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class JobPost {
  title: String = "";
  level: String = "";
  description: String = "";
  requirement: String = "";
  requiredQualification: String = "";
  postDate: String = "";
  closeDate: String = "";
  estimatedSalary: String = "";
  
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
