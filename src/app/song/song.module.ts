import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SongComponent,
  SongListComponent,
  CreateSongComponent,
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
import { SongFormComponent } from './components/song-form/song-form.component';

@NgModule({
  declarations: [
    SongListComponent,
    SongComponent,
    SongsViewComponent,
    CreateSongComponent,
    SafePipe,
    SongFormComponent,
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
