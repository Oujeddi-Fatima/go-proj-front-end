import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

export class WorkExperience {
  id:string="";
  startDate: string = "";
  finishDate: string = "";
  isCurrent: boolean = false;
  title: string = "";
  company: string = "";
  tasks: string = "";
  achievements: string = "";

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
