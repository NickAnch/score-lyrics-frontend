import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './views';
import {
  SignInComponent,
  SignUpComponent,
  UserProfileComponent,
} from '@app/user/components';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: ':id',
        component: UserProfileComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
