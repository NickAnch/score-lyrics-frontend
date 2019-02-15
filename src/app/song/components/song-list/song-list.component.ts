import { Component } from '@angular/core';
import { ISong } from '@lib/models';
import { SongService } from '@app/core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {
  public songs$: Observable<ISong[]> = this._songService.getSongs();

  constructor(
    private _songService: SongService,
  ) { }
}
