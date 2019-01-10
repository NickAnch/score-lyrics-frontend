import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SongComponent,
  SongListComponent,
} from './components';
import { SongRoutingModule } from '@app/song/song-routing.module';
import { SongsViewComponent } from './views';

@NgModule({
  declarations: [
    SongListComponent,
    SongComponent,
    SongsViewComponent,
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
  ]
})
export class SongModule { }
