import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  isEmployer: boolean = false;
  constructor(private authService: AuthenticationService) {
    this.isEmployer = authService.authModel.isEmployer;
  }

  ngOnInit() {}
}
