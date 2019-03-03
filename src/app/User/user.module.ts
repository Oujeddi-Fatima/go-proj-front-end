import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from '../Routing/user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    UserRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
