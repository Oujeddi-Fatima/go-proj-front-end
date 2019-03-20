import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-dashbeard',
  templateUrl: './dashbeard.component.html'
})
export class DashbeardComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

}
