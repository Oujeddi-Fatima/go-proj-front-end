import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from '../Routing/company-routing.module';
import { CompanyComponent } from './company.component';

@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    CompanyRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [CompanyComponent]
})
export class CompanyModule { }