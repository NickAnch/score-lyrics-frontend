import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileViewComponent } from './views';
import {
  ProfileComponent,
} from './components';
import { CurrentUserGuard } from '@app/core/services/current-user.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfileViewComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
        canActivate: [CurrentUserGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
