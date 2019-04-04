import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter, map } from 'rxjs/operators';
import { AuthenticationService } from "../authentication.service";
@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  breadcrumb: string = "/";
  constructor(private authService: AuthenticationService, private router: Router) {
    console.log(authService.isAuthenticated())
    this.breadcrumb = router.url.toString();
  }

  

  ngOnInit() {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => { return e.url;})).subscribe(
        (e) => { this.breadcrumb = e;}
    );
  }
}
