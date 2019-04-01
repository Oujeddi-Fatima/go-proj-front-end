import { JobSearchFormComponent } from "./../job-search-form/job-search-form.component";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { SearchJob } from "./search-Job.model";
import {
  NgbDateParserFormatter,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from "@angular/forms";
import { SearchJobStructure } from "./search-Job.structure";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-search-job",
  templateUrl: "./search-job.component.html"
})
export class SearchJobComponent implements OnInit {
  jobs: Array<SearchJob> = new Array<SearchJob>();
  searchJob: SearchJob = new SearchJob();
  Contact: string = "";
  uri: string = "application";
  searchJobStructure: SearchJobStructure = new SearchJobStructure();
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {
    this.httpClient
      .getFromServer("jobpost")
      .subscribe((jobs: Array<SearchJob>) => {
        jobs.forEach(SearchJob => {
          if (SearchJob != null) {
            const formGroup: FormGroup = this.searchJob.formGroup;
            SearchJob.formGroup = formGroup;
          }
        });
        this.jobs = jobs;
      });
  }
  apply(jobpost: SearchJob) {
    const data: any = {};
    data.jobPostId = jobpost.jobPostId;
    data.title = jobpost.title;
    data.level = jobpost.level;
    data.description = jobpost.description;
    data.requirement = jobpost.requirement;
    data.requiredQalification = jobpost.requiredQalification;
    data.postDate = formatDate(new Date(), "yyyy-MM-dd", "en");
    data.closeDate = this.ngbDateParserFormatter.format(jobpost.closeDate);
    data.estimatedSalary = jobpost.estimatedSalary;
    data.address = jobpost.address;
    //data.employer = jobpost.employer.getData();
    //data.company = jobpost.company.getData();
    data.skill = [];
    data.questions = [];
    jobpost.skill.map(skill => data.skill.push(skill));
    jobpost.questions.map(question => data.questions.push(question));
    data.company.businessType = "InformationTechnology"; //TODO
    data.employer = {};
    data.employer.id = this.authService.authModel.user.userId;
    this.authService.authModel.user.jobPosts.push(data);
    jobpost = new SearchJob();
    this.httpClient
      .postToServer(
        "user/" + this.authService.authModel.user.userId + "/application",
        data
      )
      .subscribe(
        data => {
          console.log(data);
        },
        err => console.log(err)
      );
  }

  ngOnInit() {}
}
