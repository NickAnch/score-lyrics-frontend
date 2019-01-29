import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManageSongService, GenreService } from '@app/song/services';
import { IGenre } from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit, OnDestroy {
  public form: FormGroup;
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

    this.form = new FormGroup({
      singer: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      linkUrl: new FormControl(''),
      genre_id: new FormControl('', [
        Validators.required,
      ]),
      lyrics: new FormControl('', [
        Validators.required,
      ]),
      translate: new FormControl(''),
    });
  }

  public ngOnDestroy() { }

  public addSong(): void {
    this._manageSong.addSong(this.form.value)
      .subscribe(() => this._router.navigate(['/']) );
  }

}
