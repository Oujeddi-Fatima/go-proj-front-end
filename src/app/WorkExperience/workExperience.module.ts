import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkExperienceRoutingModule } from '../Routing/workexperience-routing.module';
import { WorkExperienceComponent } from './workExperience.component';

@NgModule({
  declarations: [
    WorkExperienceComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    WorkExperienceRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [WorkExperienceComponent]
})
export class WorkExperienceModule { }