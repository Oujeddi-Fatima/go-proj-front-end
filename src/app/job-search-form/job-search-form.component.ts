import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientService } from '../http-client.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-search-form',
  templateUrl: './job-search-form.component.html'
})
export class JobSearchFormComponent implements OnInit {
  searchKey: string = "";
  constructor(
    private authService: AuthenticationService,
    private httpClient: HttpClientService,
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private router: Router) {
  }

  ngOnInit() {
  }

  search() {
    this.router.navigate(["/job/search"], { state: { skill: this.searchKey } });
  }
}
