import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class Certification {
  id:string="";
  title: String = "";
  completionDate: any = "";
  expirationDate: any = "";
  description: String = "";
  link:string="";
  
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
