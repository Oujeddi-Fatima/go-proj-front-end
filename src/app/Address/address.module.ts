import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressRoutingModule } from '../Routing/address-routing.module';
import { AddressComponent } from './address.component';

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    AddressRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AddressComponent]
})
export class AddressModule { }