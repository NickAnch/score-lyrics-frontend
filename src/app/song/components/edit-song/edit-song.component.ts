import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongService } from '@app/core/services';
import { ISong, IGenre } from '@lib/models';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService, ManageSongService } from '@app/song/services';
import { FormGroup } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit, OnDestroy {
  public song: ISong;
  public genres: IGenre[];
  private _songId = +this._activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private _router: Router,
    private _manageSongService: ManageSongService,
    private _songService: SongService,
    private _activatedRoute: ActivatedRoute,
    private _genreService: GenreService,
  ) { }

  public ngOnInit() {
    this._songService.getSong(this._songId)
      .subscribe((song: ISong) => {
        this.song = song;
      });

    this._genreService.getGenres()
      .subscribe((genres: IGenre[]) => {
        this.genres = genres;
      });
  }

  public ngOnDestroy() { }

  public updateSong(form: FormGroup): void {
    this._manageSongService.updateSong(form.value, this._songId)
      .pipe(untilDestroyed(this))
      .subscribe(() => this._router.navigate(['songs', this._songId]));
  }

}
