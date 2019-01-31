import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProfileComponent,
  ProfileEditComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileViewComponent } from '@app/profile/views';
import { ProfileRoutingModule } from '@app/profile/profile-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProfileViewComponent,
    ProfileComponent,
    ProfileEditComponent,
  ]
})
export class ProfileModule { }
