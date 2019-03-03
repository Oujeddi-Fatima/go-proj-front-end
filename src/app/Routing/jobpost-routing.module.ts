import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobPostComponent } from "../JobPost/jobPost.component";

const routes: Routes = [
  { path: "", component: JobPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPostRoutingModule {}
