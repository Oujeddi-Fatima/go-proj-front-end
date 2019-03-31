import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RecJobPost } from "../rec-job-posts/rec-job-posts.model";
import { HttpClientService } from "../http-client.service";
import { HttpClient } from "selenium-webdriver/http";

@Component({
  selector: "app-can-job-post",
  templateUrl: "./can-job-post.component.html"
})
export class CanJobPostComponent implements OnInit {
  recJobPost: RecJobPost = new RecJobPost();
  @Input() isCandidate: boolean;
  constructor(private httpClient: HttpClientService) {}

  ngOnInit() {}

 
}
