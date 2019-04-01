import { Component, OnInit } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { RecJobPost } from "../rec-job-posts/rec-job-posts.model";
import { AuthenticationService } from "../authentication.service";
import { RecJobPostsStructure } from "../rec-job-posts/rec-job-posts.structure";
import { ApplicationStructure } from "../submitted-application/submitted-application.structure";

@Component({
  selector: "app-rec-applications",
  templateUrl: "./rec-applications.component.html"
})
export class RecApplicationsComponent implements OnInit {
  recJobPosts: Array<any> = new Array<any>();
  applications: Array<any> = new Array<any>();
  recJobPostStructure: RecJobPostsStructure = new RecJobPostsStructure();
  applictionStructure: ApplicationStructure = new ApplicationStructure();
  isShowApp: boolean = false;
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService
  ) {
    this.getJobPostsforEmployer();
  }

  ngOnInit() {}

  getPosts() {
    this.httpClient.getFromServer("/jobpost/24"); //todo
  }

  getJobPostsforEmployer() {
    this.httpClient
      .getFromServerHref(this.authService.authModel.user._links.jobPosts.href)
      .subscribe((jobPosts: Array<any>) => {
        this.authService.authModel.user.jobPosts = JSON.parse(
          JSON.stringify(jobPosts)
        );
        this.recJobPosts = jobPosts;
      });
  }

  showApp(jobPost: any) {
    console.log(jobPost);
    this.httpClient
      .getFromServerHref(jobPost.links[0].href)
      .subscribe((applications: Array<any>) => {
        this.applications = applications;
        this.showApps();
      });
  }

  showApps() {
    this.isShowApp = true;
  }
}
