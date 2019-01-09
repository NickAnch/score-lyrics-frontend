import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SongComponent,
  SongListComponent,
} from '@app/song/components';

const routes: Routes = [
  {
    path: '',
    component: SongListComponent
  },
  {
    path: 'songs/:id',
    component: SongComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
