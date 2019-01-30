import { Component, OnInit } from '@angular/core';
import { SongService } from '@app/core/services';
import { ISong, IGenre } from '@lib/models';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from '@app/song/services';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {

  public song: ISong;
  public genres: IGenre[];
  private _songId = +this._activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private _songService: SongService,
    private _activatedRoute: ActivatedRoute,
    private _genreService: GenreService,
  ) { }

  ngOnInit() {
    this._songService.getSong(this._songId)
      .subscribe((song: ISong) => {
        this.song = song;
      });

    this._genreService.getGenres()
      .subscribe((genres: IGenre[]) => {
        this.genres = genres;
      });
  }

  public updateSong(form: FormGroup): void {
    this._songService.updateSong(form.value, this._songId).subscribe();
  }

}
