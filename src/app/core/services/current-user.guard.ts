import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CurrentUserService } from './current-user.service';
import { switchMap } from 'rxjs/operators';
import { IUser } from '@lib/models';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserGuard implements CanActivate {
  constructor(
    private _currentUserService: CurrentUserService,
    private _router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this._currentUserService.getCurrentUser()
      .pipe(
        switchMap((user: IUser) => {
          if (user === null) {
            this._router.navigate(['users/sign-in']);
            return of(false);
          } else {
            return of(true);
          }
        }),
      );
  }
}
