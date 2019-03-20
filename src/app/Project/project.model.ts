import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class Project {
  id: String = "";
  title: String = "";
  description: String = "";
  duration: String = "";
  link: String = "";

  formGroup: FormGroup = null;
  constructor() {
    var _builder = new FormBuilder();
    this.formGroup = _builder.group({});

    this.formGroup.addControl(
      "", //field name
      new FormControl("", Validators.required)
    );
  }
}
