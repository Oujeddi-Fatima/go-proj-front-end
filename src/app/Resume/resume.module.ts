import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ResumeRoutingModule } from "../Routing/resume-routing.module";
import { ResumeComponent } from "./resume.component";

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ResumeRoutingModule, FormsModule],
  providers: [],
  bootstrap: [ResumeComponent]
})
export class ResumeModule {}
