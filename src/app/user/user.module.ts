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
import { SharedModule } from '@app/shared/shared.module';

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
    SharedModule,
  ]
})
export class UserModule { }
