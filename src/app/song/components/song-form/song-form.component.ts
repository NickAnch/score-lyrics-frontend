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

  /*
    RECOMMENDATION:
     * Divide ALL decorators into 2 lines like and use fucking modifiers (private | public)
     * EventEmitter is also observable. use $
     so:

     @Output()
     public sendSong$: ...
  */
  @Output() sendSong = new EventEmitter<FormGroup>();

  constructor() { }

  public ngOnInit() {
    // use additional function like private _initForm() do not litter ngOnInit
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
        // I have some doubts of using regExp at all, but ok)
        Validators
          .pattern('^(https|http):\/\/www\.youtube\.com\/embed\/[A-z0-9]+'),
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

  public emitForm(): void {
    this.sendSong.emit(this.form);
  }

}
