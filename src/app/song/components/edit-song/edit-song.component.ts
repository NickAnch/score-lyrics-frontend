import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongService } from '@app/core/services';
import { ISong, IGenre } from '@lib/models';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService, ManageSongService } from '@app/song/services';
import { FormGroup } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit, OnDestroy {
  public song: ISong;
  public genres$: Observable<IGenre[]> = this._genreService.getGenres();
  private _songId = +this._activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private _router: Router,
    private _manageSongService: ManageSongService,
    private _songService: SongService,
    private _activatedRoute: ActivatedRoute,
    private _genreService: GenreService,
    private _snackBar: MatSnackBar,
  ) { }

  public ngOnInit() {
    this._songService.getSong(this._songId)
      .pipe(untilDestroyed(this))
      .subscribe((song: ISong) => {
        this.song = song;
      });
  }

  public ngOnDestroy() { }

  public updateSong(form: FormGroup): void {
    this._manageSongService.updateSong(form.value, this._songId)
      .pipe(untilDestroyed(this))
      .subscribe(() => {
        this._snackBar.open('The song was edited.', 'Undo', {
          duration: 2000
        });
        this._router.navigate(['songs', this._songId]);
      });
  }

}
