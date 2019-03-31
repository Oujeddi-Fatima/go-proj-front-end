import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Project } from "../project/project.model";
import { AcademicRecord } from "../academic-record/academic-record.model";
import { Certification } from "../certification/certification.model";
import { WorkExperience } from "../work-experience/workExperience.model";
import { Skill } from "../skill/skill.model";
import { User } from "../account/account.model";

export class Resume {
  id: string = "";
  title: String = "";
  description: String = "";
  user: User = new User();
  projects: Array<Project> = new Array<Project>();
  academicRecords: Array<AcademicRecord> = new Array<AcademicRecord>();
  certifications: Array<Certification> = new Array<Certification>();
  workExperiences: Array<WorkExperience> = new Array<WorkExperience>();
  skills: Array<Skill> = new Array<Skill>();
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
