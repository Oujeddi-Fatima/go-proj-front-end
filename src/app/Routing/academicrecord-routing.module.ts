import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcademicRecordComponent } from "../AcademicRecord/academicRecord.component";

const routes: Routes = [
  { path: "", component: AcademicRecordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRecordRoutingModule {}
