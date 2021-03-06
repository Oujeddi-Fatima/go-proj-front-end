import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SecurityGuard } from "./security.guard";
import { DashbeardComponent } from "./dashbeard/dashbeard.component";
import { AccountComponent } from "./account/account.component";
import { ResumeComponent } from "./resume/resume.component";
import { AppComponent } from "./app.component";
import { CompanyComponent } from "./company/company.component";
import { RecJobPostsComponent } from "./rec-job-posts/rec-job-posts.component";
import { RecApplicationsComponent } from "./rec-applications/rec-applications.component";
import { from } from "rxjs";
import { SearchJobComponent } from "./search-job/search-job.component";
import { EmployeeRoleGuard } from "./employee-role.guard";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SubmittedApplicationComponent } from "./submitted-application/submitted-application.component";

const homeRoutes: Routes = [
  {
    path: "dashboard",
    component: DashbeardComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: "account",
    component: AccountComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: "resume",
    component: ResumeComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: "companies",
    component: CompanyComponent,
    canActivate: [SecurityGuard, EmployeeRoleGuard]
  },
  {
    path: "manage/posts",
    component: RecJobPostsComponent,
    canActivate: [SecurityGuard, EmployeeRoleGuard]
  },
  {
    path: "manage/applications",
    component: RecApplicationsComponent,
    canActivate: [SecurityGuard, EmployeeRoleGuard]
  },
  {
    path: "job/search",
    component: SearchJobComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: "job/submitted",
    component: SubmittedApplicationComponent,
    canActivate: [SecurityGuard]
  }
];

const landingRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "signout", component: SignOutComponent },
  {
    path: "",
    component: LandingPageComponent,
    children: homeRoutes,
    canActivate: [SecurityGuard]
  },
  {
    path: "home",
    redirectTo: "/",
    pathMatch: "full"
  }
];

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: landingRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
