import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManageSongService, GenreService } from '@app/song/services';
import { IGenre } from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit, OnDestroy {
  public genres: IGenre[];

  constructor(
    private _manageSong: ManageSongService,
    private _genreService: GenreService,
    private _router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  public ngOnInit() {

    /* RECOMMENDATION:
      it would be more beautiful to use this with async pipe.
      genres$: IGenre[];
      this.genres$ = this._genreService.getGenres();
      in this case you may remove untilDestroy and subscribe at all
    */
    this._genreService.getGenres()
      .pipe(untilDestroyed(this))
      .subscribe(genres => {
        this.genres = genres;
      });
  }

  public ngOnDestroy() { }

  public sendSong(form: FormGroup): void {
    this._manageSong.addSong(form.value)
      .subscribe(() => {
        this._snackBar.open('A song was added.', 'Undo', {
          duration: 2000
        });
        this._router.navigate(['/']);
      });
  }

}
