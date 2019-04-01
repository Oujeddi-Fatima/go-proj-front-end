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

@Component({
  selector: "app-search-job",
  templateUrl: "./search-job.component.html"
})
export class SearchJobComponent implements OnInit {
  jobs: Array<SearchJob> = new Array<SearchJob>();
  searchJob: SearchJob = new SearchJob();
  Contact: string = "";
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

  ngOnInit() {}
}
