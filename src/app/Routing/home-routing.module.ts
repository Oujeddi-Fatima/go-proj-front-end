import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePage } from "../Home/homePage.component";

const routes: Routes = [
  { path: "home", component: HomePage },
  { path: "user", loadChildren:'../User/user.module#UserModule'},
  { path: "resume", loadChildren:'../Resume/resume.module#ResumeModule' },
  { path: "academic", loadChildren:'../AcademicRecord/academicRecord.module#AcademicRecordModule' },
  { path: "address", loadChildren:'../Address/address.module#AddressModule' },
  { path: "certification", loadChildren:'../Certification/certification.module#CertificationModule' },
  { path: "course", loadChildren:'../Course/course.module#CourseModule' },
  { path: "jobPost", loadChildren:'../JobPost/jobPost.module#JobPostModule' },
  { path: "project", loadChildren:'../Project/project.module#ProjectModule' },
  { path: "question", loadChildren:'../Question/question.module#QuestionModule' },
  { path: "workExperience", loadChildren:'../WorkExperience/workExperience.module#WorkExperienceModule' },
  { path: "", component: HomePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
