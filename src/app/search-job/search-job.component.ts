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
import { RecJobPost } from '../rec-job-posts/rec-job-posts.model';
import { Application } from './application.model';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: "app-search-job",
  templateUrl: "./search-job.component.html"
})
export class SearchJobComponent implements OnInit {
  jobs: any = new Array<SearchJob>();
  searchJob: SearchJob = new SearchJob();
  Contact: string = "";
  uri: string = "application";
  searchKey: any = "";
  searchJobStructure: SearchJobStructure = new SearchJobStructure();
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private router: Router
  ) {
    this.searchJobs();
  }
  apply(jobpost: RecJobPost) {
    const data: Application = new Application;
    data.jobPost = jobpost;
    data.resume = this.authService.authModel.user.resume;
    data.applicant = this.authService.authModel.user;
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

  searchJobs(searchKey?) {
    if (searchKey || searchKey == "") {
      this.httpClient.getFromServerQueryParam("skill", searchKey).subscribe((skillSet: Array<any>) => {

        this.httpClient.postToServer("jobpost/byskill", skillSet).subscribe((jobs) => {
          console.log(jobs);
          this.jobs = jobs;
        });

      });
    } else {
      this.httpClient.getFromServer("jobpost").subscribe((jobs: Array<RecJobPost>) => {
        this.jobs = jobs;
      });
    }
    
  }

  ngOnInit() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => { return e.url; })).subscribe(
        (e) => {
          this.searchKey = this.router.getCurrentNavigation().extras.state;
          this.searchJobs(this.searchKey);
        }
    );
  }
}
