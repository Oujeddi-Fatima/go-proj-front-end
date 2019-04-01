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

export class SearchJob {
  jobPostId: string = "";
  title: String = "";
  level: String = "";
  description: String = "";
  requirement: String = "";
  requiredQalification: String = "";
  postDate: any = Date.now();
  closeDate: any = "";
  estimatedSalary: String = "";
  address: Address = new Address();
  employer: User = new User();
  company: Company = new Company();
  skill: Array<Skill> = new Array<Skill>();
  questions: Array<Question> = new Array<Question>();

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
