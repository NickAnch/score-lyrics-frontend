import { Component, Input } from '@angular/core';
import { ISong } from '@lib/models';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent {
  @Input() songs: ISong[];

  constructor() { }

  trackByFn(index, song) {
    return song.id;
  }
}
