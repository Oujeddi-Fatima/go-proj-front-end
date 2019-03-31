import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { Resume } from "./resume.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
import { AcademicRecordStructure } from "../academic-record/academic-record.structure";
import { AcademicRecord } from "../academic-record/academic-record.model";
import { Certification } from "../certification/certification.model";
import { CertificationStructure } from "../certification/certification.structure";
import { ProjectStructure } from "../project/project.Structure";
import { Project } from "../project/project.model";
import { WorkExperienceStructure } from "../work-experience/workExperience.structure";
import { WorkExperience } from "../work-experience/workExperience.model";
import { SkillStructure } from "../skill/skill.structure";
import { Skill } from "../skill/skill.model";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"]
})
export class ResumeComponent implements OnInit {
  resume: Resume = new Resume();
  academicRecordStructure: AcademicRecordStructure = new AcademicRecordStructure();
  certificationStructure: CertificationStructure = new CertificationStructure();
  projectStructure: ProjectStructure = new ProjectStructure();
  workExperienceStructure: WorkExperienceStructure = new WorkExperienceStructure();
  skillStructure: SkillStructure = new SkillStructure();
  private eventsSubject: Subject<any> = new Subject<any>();

  emitEventToChild(event) {
    this.eventsSubject.next(event);
  }

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    public http: HttpClient
  ) {
    this.httpClient
      .getFromServerHref(this.authService.authModel.user._links.resume.href)
      .subscribe((resume: Resume) => {
        if (resume != null) {
          const formGroupt: FormGroup = this.resume.formGroup;
          this.resume = resume;
          this.resume.formGroup = formGroupt;
        }
      });
    this.resume.user.userId = this.authService.authModel.user.userId;
  }

  addProject(project) {
    this.resume.projects.push(project);
  }
  addAcademicRecord(academicRecord) {
    this.resume.academicRecords.push(academicRecord);
  }
  addCertification(certification) {
    this.resume.certifications.push(certification);
  }
  addSkill(skill) {
    this.resume.skills.push(skill);
  }
  addWorkExperience(workExperience) {
    this.resume.workExperiences.push(workExperience);
  }

  deleteAcademicRecord(acRecRem: AcademicRecord) {
    const index = this.resume.academicRecords.indexOf(acRecRem, 0);
    this.resume.academicRecords.splice(index, 1);
  }

  deleteCertification(cert: Certification) {
    const index = this.resume.certifications.indexOf(cert, 0);
    this.resume.certifications.splice(index, 1);
  }

  deleteProjects(proj: Project) {
    const index = this.resume.projects.indexOf(proj, 0);
    this.resume.projects.splice(index, 1);
  }

  deleteWorkExperience(workExp: WorkExperience) {
    const index = this.resume.workExperiences.indexOf(workExp, 0);
    this.resume.workExperiences.splice(index, 1);
  }
  deleteSkill(skill: Skill) {
    const index = this.resume.skills.indexOf(skill, 0);
    this.resume.skills.splice(index, 1);
  }

  ngOnInit() {}

  saveResume() {
    let data: any;
    if (this.authService.authModel.user.resume != null) {
      data = this.authService.authModel.user.resume;
    } else {
      data = {};
    }
    data.user = {};
    data.user.userId = this.authService.authModel.user.userId;
    data.id = this.resume.id;
    data.title = this.resume.title;
    data.description = this.resume.description;
    data.projects = this.resume.projects;
    data.skills = this.resume.skills;
    data.workExperiences = this.resume.workExperiences;
    data.academicRecords = this.resume.academicRecords;

    this.httpClient
      .postToServer("user/" + data.user.userId + "/resume", data)
      .subscribe(
        data => {
          console.log(data);
        },
        err => console.log(err)
      );
  }
}
