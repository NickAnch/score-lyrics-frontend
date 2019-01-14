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
  public songs: ISong[];

  constructor(
    private _songService: SongService,
  ) {}

  public ngOnInit() {
    this.selectTab('most_liked');
  }

  public ngOnDestroy() {}

  public selectTab(tab: string): void {
    this.getSongs(tab);
  }

  public getSongs(tab: string): void {
    this._songService.getSongs(tab)
      .pipe(untilDestroyed(this))
      .subscribe(songs => this.songs = songs);
  }

}
