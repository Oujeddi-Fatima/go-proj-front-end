import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectRoutingModule } from '../Routing/project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    ProjectRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [ProjectComponent]
})
export class ProjectModule {}
