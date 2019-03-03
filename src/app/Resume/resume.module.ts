import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ResumeRoutingModule } from "../Routing/resume-routing.module";
import { ResumeComponent } from "./resume.component";
import { GridComponent } from "../Utility/grid.component";

@NgModule({
  declarations: [ResumeComponent, GridComponent],
  imports: [CommonModule, ResumeRoutingModule, FormsModule],
  providers: [],
  bootstrap: [ResumeComponent]
})
export class ResumeModule {}
