import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '@app/core/services';

@Injectable()
export class ProfileResolver implements Resolve<boolean> {
  constructor(
    private _currentUser: CurrentUserService,
  ) {}

  public resolve(): Observable<boolean> {
    return Observable.create(
      (observer) => {
        this._currentUser.getCurrentUser().subscribe(
          () => {
            observer.next(true);
            observer.complete();
          });
      }
    );
  }
}
