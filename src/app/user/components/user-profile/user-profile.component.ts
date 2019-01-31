import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '@lib/models';
import { UserService } from '@app/user/services';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private _userId = +this._activatedRoute.snapshot.paramMap.get('id');
  public user: IUser;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _router: Router,
  ) { }

  public ngOnInit() {
    this._userService.getUser(this._userId)
      .pipe(untilDestroyed(this))
      .subscribe(user => {
        this.user = user;
      });
  }

  public ngOnDestroy() { }

  public showSong(id: number): void {
    this._router.navigate(['songs', id]);
  }

}
