import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongComponent } from './components/song/song.component';

@NgModule({
  declarations: [
    SongListComponent,
    SongComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SongListComponent,
  ]
})
export class SongModule { }
