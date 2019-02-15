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
  @Input() public songs: ISong[];

  constructor() { }

  public trackByFn(index, song: ISong) {
    return song.id;
  }
}
