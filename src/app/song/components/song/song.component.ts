import { Component,
         OnInit,
         OnDestroy,
} from '@angular/core';
import { SongService, CurrentUserService } from '@app/core/services';
import {
  ISong,
  IVote,
  IUser,
} from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { ActivatedRoute } from '@angular/router';
import { ManageSongService } from '@app/song/services';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, OnDestroy {
  public song: ISong;
  public vote: IVote;
  public user: IUser;
  private songId = +this._route.snapshot.paramMap.get('id');

  constructor(
    private _songService: SongService,
    private _currentUser: CurrentUserService,
    private _manageSong: ManageSongService,
    private _route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this._currentUser.getCurrentUser()
      .subscribe(
        (curUser) => {
          this.user = curUser;
          this.getSong();
        }
      );
  }

  public ngOnDestroy() { }

  public getSong(): void {
    this._songService.getSong(this.songId)
      .pipe(untilDestroyed(this))
      .subscribe(
        (song) => {
          this.song = song;
          this.vote = ((song.vote && this.user.id === song.vote.user_id)
            && song.vote);
          if (this.vote === null && this.user) {
            this.vote = {
              mark: null,
              user_id: this.user.id,
            };
          }
        }
      );
  }

  public rateSong(mark): void {
    this._manageSong.rateSong(this.songId, mark)
      .subscribe();
  }

  public putMark(key: string): void {
    if (this.user) {
      const condition = key === 'likes';
      if (this.vote && this.vote.mark === condition) {
        this.rateSong(null);
        this.song.rating[key]--;
        if (this.vote.mark !== condition) {
          this.song.rating.dislikes++;
        }
        this.vote.mark = null;
      } else {
        this.rateSong(condition);
        if (this.vote && this.vote.mark === !condition) {
          key === 'likes' ? this.song.rating.dislikes--
            : this.song.rating.likes--;
          this.vote.mark = condition;
        }
        this.song.rating[key]++;
        this.vote.mark = condition;
      }
    }
  }

  get isLiked(): boolean {
    return this.vote && this.vote.mark;
  }

  get isDisliked(): boolean {
    return this.vote && this.vote.mark === false;
  }
}
