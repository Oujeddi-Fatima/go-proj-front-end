import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class AcademicRecord {
  id: string = "";
  school: String = "";
  degree: String = "";
  enrollmentDate: any = "";
  completionDate: any = "";
  major: string = "";
  gpa: String = "";

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
