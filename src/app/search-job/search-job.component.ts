import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { HttpClientService } from "../http-client.service";
import { Address } from "../address/address.model";

@Component({
  selector: "app-search-job",
  templateUrl: "./search-job.component.html"
})
export class SearchJobComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
