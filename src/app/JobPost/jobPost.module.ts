import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobPostRoutingModule } from '../Routing/jobpost-routing.module';
import { JobPostComponent } from './jobPost.component';

@NgModule({
  declarations: [
    JobPostComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    JobPostRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [JobPostComponent]
})
export class JobPostModule {}
