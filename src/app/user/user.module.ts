import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SignUpComponent,
  SignInComponent,
  UserProfileComponent,
} from '@app/user/components';
import { UserRoutingModule } from '@app/user/user-routing.module';
import { UserViewComponent } from '@app/user/views';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  declarations: [
    UserViewComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
