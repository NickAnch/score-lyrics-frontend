import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SongComponent,
  SongListComponent,
  CreateSongComponent,
  EditSongComponent,
} from '@app/song/components';
import { SongsViewComponent } from './views';
import { CurrentUserGuard } from '@app/core/services';

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
      {
        path: 'edit/:id',
        component: EditSongComponent,
        canActivate: [CurrentUserGuard]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
