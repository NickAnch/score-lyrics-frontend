import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '@app/core/services';
import { IUser } from '@lib/models';

@Injectable()
export class ProfileResolver implements Resolve<IUser> {
  constructor(
    private _currentUser: CurrentUserService,
  ) {}

  public resolve(): Observable<IUser> {
    return this._currentUser.getCurrentUser();
  }
}
