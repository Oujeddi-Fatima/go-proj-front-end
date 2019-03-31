import { Component, OnInit } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { RecJobPost } from "../rec-job-posts/rec-job-posts.model";

@Component({
  selector: "app-rec-applications",
  templateUrl: "./rec-applications.component.html"
})
export class RecApplicationsComponent implements OnInit {
  jobPosts: Array<RecJobPost> = new Array<RecJobPost>();

  constructor(private httpService: HttpClientService) {}

  ngOnInit() {}

  getPosts() {
    this.httpService.getFromServer("/jobpost/24"); //todo
  }
}
