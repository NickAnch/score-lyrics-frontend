import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SongComponent,
  SongListComponent,
  CreateSongComponent,
} from '@app/song/components';
import { SongsViewComponent } from './views';
import { CurrentUserGuard } from '@app/core/services/current-user.guard';

const routes: Routes = [
  {
    path: '',
    component: SongsViewComponent,
    children: [
      {
        path: '',
        component: SongListComponent,
      },
      {
        path: 'create',
        component: CreateSongComponent,
        canActivate: [CurrentUserGuard]
      },
      {
        path: ':id',
        component: SongComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
