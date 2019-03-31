import { Component, OnInit } from "@angular/core";
import { RecJobPost } from "New folder/go-proj-front-end/src/app/rec-job-posts/rec-job-posts.model";
import { HttpClientService } from "../http-client.service";

@Component({
  selector: "app-rec-applications",
  templateUrl: "./rec-applications.component.html"
})
export class RecApplicationsComponent implements OnInit {
  jobPosts: Array<RecJobPost> = new Array<RecJobPost>();

  constructor(private httpService: HttpClientService) {}

  ngOnInit() {}


  getPosts(){
    this.httpService.getFromServer("/jobpost/24")//todo
  }
}
