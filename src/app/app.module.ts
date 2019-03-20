import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CardComponent } from "./card/card.component";
import { DashbeardComponent } from "./dashbeard/dashbeard.component";
import { AccountComponent } from "./account/account.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResumeComponent } from "./resume/resume.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { HttpClientService } from "./http-client.service";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { JobSearchFormComponent } from "./job-search-form/job-search-form.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { AcademicRecordComponent } from "./academic-record/academic-record.component";
import { CertificationComponent } from "./certification/certification.component";
import { ProjectComponent } from "./project/project.component";
import { SkillComponent } from "./skill/skill.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CourseComponent } from './course/course.component';
import { CompanyComponent } from './company/company.component';
import { RecJobPostsComponent } from './rec-job-posts/rec-job-posts.component';
import { RecApplicationsComponent } from './rec-applications/rec-applications.component';
import { AddressComponent } from './address/address.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    CardComponent,
    DashbeardComponent,
    AccountComponent,
    ResumeComponent,
    SidebarComponent,
    JobSearchFormComponent,
    WorkExperienceComponent,
    AcademicRecordComponent,
    CertificationComponent,
    ProjectComponent,
    SkillComponent,
    CourseComponent,
    CompanyComponent,
    RecJobPostsComponent,
    RecApplicationsComponent,
    AddressComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AuthenticationService, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
