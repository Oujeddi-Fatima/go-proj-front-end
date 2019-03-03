import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class WorkExperience {
  startDate: String = "";
  finishDate: String = "";
  title: String = "";
  taskDescription: String = "";

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