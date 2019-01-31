import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '@app/core/services';
import { IUser } from '@lib/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {

  constructor(
    private _currentUserService: CurrentUserService,
  ) { }

  get profile(): IUser {
    return this._currentUserService.currentUser;
  }
}
