import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WorkExperienceComponent } from "../WorkExperience/workExperience.component";

const routes: Routes = [
  { path: "", component: WorkExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkExperienceRoutingModule {}