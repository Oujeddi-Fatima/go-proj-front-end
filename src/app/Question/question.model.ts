import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
  } from "@angular/forms";

  export class Question {
    id: string = "";
    question: String = "";
    answer: String = "";

    formGroup: FormGroup = null;
    constructor() {
      var _builder = new FormBuilder();
      this.formGroup = _builder.group({});
  
      this.formGroup.addControl(
        "title",
        new FormControl("", Validators.required)
      );
      this.formGroup.addControl(
        "description",
        new FormControl("", Validators.required)
      );
    }
  }
  