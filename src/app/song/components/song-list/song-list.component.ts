import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../core/services/song.service';
import { ISong } from '../../../../lib/models/song.interface';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  public songs: ISong[];

  constructor(
    private songService: SongService
  ) { }

  public ngOnInit() {
    this.getSongs();
  }

  public getSongs(): void {
    this.songService.getSongs()
      .subscribe(songs => this.songs = songs);
  }

}
