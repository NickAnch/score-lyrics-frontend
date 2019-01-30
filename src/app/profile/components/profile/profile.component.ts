import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '@app/core/services';
import { IUser } from '@lib/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  public profile: IUser;

  constructor(
    private _currentUserService: CurrentUserService,
  ) { }

  public ngOnInit() {
    this.profile = this._currentUserService.currentUser;
  }
}
