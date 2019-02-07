import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ISong } from '@lib/models';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsComponent {
  @Input() songs: ISong[];

  constructor() { }

  // FIXME:
  // use _ for mark unused parameters (ts lint swear in your case)
  // and try to use types for parameters

  // trackByFn(_, song: ISong) {...
  trackByFn(index, song) {
    return song.id;
  }
}
