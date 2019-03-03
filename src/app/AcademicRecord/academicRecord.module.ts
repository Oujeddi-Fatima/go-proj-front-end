import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcademicRecordRoutingModule } from '../Routing/academicrecord-routing.module';
import { AcademicRecordComponent } from './academicRecord.component';

@NgModule({
  declarations: [
    AcademicRecordComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    AcademicRecordRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AcademicRecordComponent]
})
export class AcademicRecordModule { }