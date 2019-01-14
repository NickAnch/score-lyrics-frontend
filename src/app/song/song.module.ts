import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SongComponent,
  SongListComponent,
} from './components';
import { SongRoutingModule } from '@app/song/song-routing.module';
import { SongsViewComponent } from './views';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    SongListComponent,
    SongComponent,
    SongsViewComponent,
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    SharedModule,
  ]
})
export class SongModule { }
