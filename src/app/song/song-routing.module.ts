import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SongComponent,
  SongListComponent,
} from '@app/song/components';
import { SongsViewComponent } from './views';

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
        path: ':id',
        component: SongComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
