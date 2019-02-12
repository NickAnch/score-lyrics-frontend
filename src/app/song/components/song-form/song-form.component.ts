import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IGenre, ISong } from '@lib/models';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongFormComponent implements OnInit {
  public form: FormGroup;

  @Input() genres: IGenre[];
  @Input() song: ISong = {
    singer: '',
    name: '',
    linkUrl: '',
    genre_name: '',
    lyrics: '',
    translate: '',
    id: null,
    views: null,
    rating: null,
    vote: null,
    genre_id: null,
  };
  @Output() sendSong = new EventEmitter<FormGroup>();

  constructor() { }

  public ngOnInit() {
    this.form = new FormGroup({
      singer: new FormControl(this.song.singer, [
        Validators.required,
        Validators.minLength(2),
      ]),
      name: new FormControl(this.song.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
      linkUrl: new FormControl(this.song.linkUrl, [
        Validators
          .pattern('^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+'),
      ]),
      genre_id: new FormControl(this.song.genre_id, [
        Validators.required,
      ]),
      lyrics: new FormControl(this.song.lyrics, [
        Validators.required,
      ]),
      translate: new FormControl(this.song.translate),
    });
  }

  private _getYoutubeID(url: string): string {
    let link: string[];
    link = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (link[2] !== undefined) ?
      link[2].split(/[^0-9a-z_\-]/i)[0] : link[0];
  }

  public emitForm(): void {
    if (this.form.value.linkUrl) {
      const ID = this._getYoutubeID(this.form.value.linkUrl);
      this.form.value.linkUrl = `https://www.youtube.com/embed/${ID}`;
    }
    this.sendSong.emit(this.form);
  }

}
