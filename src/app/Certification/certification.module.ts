import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificationRoutingModule } from '../Routing/certification-routing.module';
import { CertificationComponent } from './certification.component';


@NgModule({
  declarations: [
    CertificationComponent],
  imports: [CommonModule,
    CertificationRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [CertificationComponent]
})
export class CertificationModule {}
