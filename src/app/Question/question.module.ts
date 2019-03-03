import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionRoutingModule } from '../Routing/question-routing.module';
import { QuestionComponent } from './question.component';

@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    QuestionRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [QuestionComponent]
})
export class QuestionModule { }