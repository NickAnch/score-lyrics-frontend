import { Component,
         OnInit,
         OnDestroy
} from '@angular/core';
import { SongService } from '@app/core/services';
import { ISong } from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, OnDestroy {
  public song: ISong;

  constructor(
    private _songService: SongService,
    private _route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.getSong();
  }

  public ngOnDestroy() {
  }

  public getSong(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._songService.getSong(id)
      .pipe(untilDestroyed(this))
      .subscribe(song => this.song = song);
  }

}
