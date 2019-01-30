import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISong } from '@lib/models';
import { SongService } from '@app/core/services';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnDestroy, OnInit {
  public songs: ISong[];

  constructor(
    private _songService: SongService,
  ) { }

  public ngOnDestroy() { }

  public ngOnInit() {
    this.getSongs();
  }

  public getSongs(): void {
    this._songService.getSongs()
      .pipe(untilDestroyed(this))
      .subscribe(songs => this.songs = songs);
  }

}
