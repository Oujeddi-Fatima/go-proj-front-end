import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseRoutingModule } from '../Routing/course-routing.module';
import { CourseComponent } from './course.component';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    CourseRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class CourseModule { }