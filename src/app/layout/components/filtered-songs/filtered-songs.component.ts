import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongService } from '@app/core/services';
import { ISong } from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-filtered-songs',
  templateUrl: './filtered-songs.component.html',
  styleUrls: ['./filtered-songs.component.scss']
})
export class FilteredSongsComponent implements OnInit, OnDestroy {
  public topSongs: ISong[];
  public latestSongs: ISong[];

  constructor(
    private _songService: SongService,
  ) {}

  public ngOnInit() {
    this._songService.getSongs('filtered')
      .pipe(untilDestroyed(this))
      .subscribe(latestSongs => {
        this.latestSongs = latestSongs;
      });
    this._songService.getSongs('most_liked')
      .pipe(untilDestroyed(this))
      .subscribe(topSongs => {
        this.topSongs = topSongs;
      });
  }

  public ngOnDestroy() {}

}
