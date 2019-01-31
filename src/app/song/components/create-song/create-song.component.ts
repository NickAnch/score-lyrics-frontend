import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManageSongService, GenreService } from '@app/song/services';
import { IGenre } from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup } from '@angular/forms';

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
    private _spinner: NgxSpinnerService,
  ) { }

  public ngOnInit() {
    this._spinner.show();
    this._genreService.getGenres()
      .pipe(untilDestroyed(this))
      .subscribe(genres => {
        this.genres = genres;
        this._spinner.hide();
      });
  }

  public ngOnDestroy() { }

  public sendSong(form: FormGroup): void {
    this._manageSong.addSong(form.value)
      .subscribe(() => this._router.navigate(['/']) );
  }

}
