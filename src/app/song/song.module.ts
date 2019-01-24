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
import { ManageSongService } from '@app/song/services';
import { SafePipe } from '@app/song/services/safe.pipe';

@NgModule({
  declarations: [
    SongListComponent,
    SongComponent,
    SongsViewComponent,
    CreateSongComponent,
    SafePipe,
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
  ],
})
export class SongModule { }
