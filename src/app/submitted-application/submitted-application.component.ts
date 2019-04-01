import { Component, OnInit } from "@angular/core";
import { Application } from "../search-job/application.model";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { RecJobPost } from "../rec-job-posts/rec-job-posts.model";
import { ApplicationStructure } from "./submitted-application.structure";

@Component({
  selector: "app-submitted-application",
  templateUrl: "./submitted-application.component.html"
})
export class SubmittedApplicationComponent implements OnInit {
  applications: Array<Application> = new Array<Application>();
  applicationStructure: ApplicationStructure = new ApplicationStructure();
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) {
    this.httpClient
      .getFromServerHref(this.authService.authModel.user._links.applications.href)
      .subscribe((applications: Array<Application>) => {
        this.applications = applications;
      });
  }

  ngOnInit() {}
}
