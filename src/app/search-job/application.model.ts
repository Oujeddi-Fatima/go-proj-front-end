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
  
  export class Application {
    id: string = "";
    submissionDate: any = Date.now();
    level: string = "";
    score: string = "";
    applicant: User ;
    jobPost: RecJobPost = new RecJobPost();
    resume: Resume = new Resume();
    answers: Array<Question> = new Array<Question>();
    status: string = "PENDING";

    constructor() {
    }
  }
  