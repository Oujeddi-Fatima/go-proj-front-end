import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Address } from "../address/address.model";
import { User } from "../account/account.model";
import { Company } from "../company/company.model";
import { Skill } from "../skill/skill.model";
import { Question } from "../question/question.model";
import { RecJobPost } from "../rec-job-posts/rec-job-posts.model";

import { Resume } from "../resume/resume.model";

export class RecApplication {
  id: string = "";
  submitedDate: String = "";
  level: String = "";
  score: String = "";
  jobPost: RecJobPost = new RecJobPost();
  resume: Resume = new Resume();
  answers: Array<Question> = new Array<Question>();
  status: string = "";

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
