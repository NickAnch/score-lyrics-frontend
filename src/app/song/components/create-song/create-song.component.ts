import { Component, OnDestroy } from '@angular/core';
import { ManageSongService, GenreService } from '@app/song/services';
import { IGenre } from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnDestroy {
  public genres$: Observable<IGenre[]> = this._genreService.getGenres();

  constructor(
    private _manageSong: ManageSongService,
    private _genreService: GenreService,
    private _router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  public sendSong(form: FormGroup): void {
    this._manageSong.addSong(form.value)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this._snackBar.open('A song was added.', 'Undo', {
          duration: 2000
        });
        this._router.navigate(['/']);
      });
  }

  public ngOnDestroy() { }
}
