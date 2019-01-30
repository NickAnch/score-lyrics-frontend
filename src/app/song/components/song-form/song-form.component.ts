import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IGenre } from '@lib/models';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent implements OnInit {

  public form: FormGroup;

  @Input('genres') genres: IGenre;
  @Output() sendSong = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit() {
    console.log('Was init')
    this.form = new FormGroup({
      singer: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      linkUrl: new FormControl('', [
        Validators
          .pattern('^(https|http):\/\/www\.youtube\.com\/embed\/[A-z0-9]+'),
      ]),
      genre_id: new FormControl('', [
        Validators.required,
      ]),
      lyrics: new FormControl('', [
        Validators.required,
      ]),
      translate: new FormControl(''),
    });
  }

  public addSong(): void {
    this.sendSong.emit(this.form);
  }

}
