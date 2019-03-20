import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { Resume } from "./resume.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css"]
})
export class ResumeComponent implements OnInit {
  resume: Resume = new Resume();

  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    public http: HttpClient
  ) {
    this.resume.user.id = this.authService.authModel.userId;
  }

  addProject(project) {
    this.resume.projects.push(project);
    console.log(this.resume.projects);
  }
  addAcademicRecord(academicRecord) {
    this.resume.academicRecords.push(academicRecord);
    console.log(this.resume.academicRecords);
  }
  addCertification(certification) {
    this.resume.certifications.push(certification);
    console.log(this.resume.certifications);
  }
  addSkill(skill) {
    this.resume.skills.push(skill);
    console.log(this.resume.skills);
  }
  addWorkExperience(workExperience) {
    this.resume.workExperiences.push(workExperience);
    console.log(this.resume.workExperiences);
  }

  ngOnInit() {}

  saveResume() {
    const data: any = {};
    data.id = this.resume.id;
    data.title = this.resume.title;
    data.description = this.resume.description;
    data.projects = this.resume.projects;
    data.skills = this.resume.skills;
    data.workExperiences = this.resume.workExperiences;
    data.academicRecords = this.resume.academicRecords;
    data.user = {};
    data.user.id = this.resume.user.id;
    this.http.post("http://localhost:8080/resume/", data).subscribe(
      data => {
        console.log(data);
      },
      err => console.log(err)
    );
  }
}
