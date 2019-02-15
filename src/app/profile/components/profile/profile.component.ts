import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrentUserService } from '@app/core/services';
import { IUser } from '@lib/models';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  public profile: IUser;

  constructor(
    private _currentUserService: CurrentUserService,
  ) { }

  public ngOnInit() {
    this._currentUserService.getCurrentUser()
      .pipe(untilDestroyed(this))
      .subscribe(user => this.profile = user);
  }

  public ngOnDestroy() { }
}
