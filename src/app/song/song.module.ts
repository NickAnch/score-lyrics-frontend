import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SongComponent,
  SongListComponent,
  CreateSongComponent,
  SongFormComponent,
  EditSongComponent,
} from './components';
import { SongRoutingModule } from '@app/song/song-routing.module';
import { SongsViewComponent } from './views';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ManageSongService,
  RatingService,
  GenreService,
} from '@app/song/services';
import { SafePipe } from '@app/song/services/safe.pipe';

@NgModule({
  declarations: [
    SongListComponent,
    SongComponent,
    SongsViewComponent,
    CreateSongComponent,
    SafePipe,
    SongFormComponent,
    EditSongComponent,
  ],
  imports: [
    CommonModule,
    SongRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ManageSongService,
    RatingService,
    GenreService,
  ],
})
export class SongModule { }
