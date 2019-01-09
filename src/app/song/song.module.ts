import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SongComponent,
  SongListComponent,
} from './components';
import { SongRoutingModule } from '@app/song/song-routing.module';

@NgModule({
  declarations: [
    SongListComponent,
    SongComponent,
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
  ]
})
export class SongModule { }
