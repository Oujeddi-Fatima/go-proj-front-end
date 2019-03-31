import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { identifierModuleUrl } from "@angular/compiler";

export class Skill {
  id: string = "";
  skill: String = "";

  formGroup: FormGroup = null;
  constructor() {
    var _builder = new FormBuilder();
    this.formGroup = _builder.group({});

    this.formGroup.addControl(
      "", //field name
      new FormControl("", Validators.required)
    );
  }

  getJson() {
    return { id: this.id, skill: this.skill };
  }
}
