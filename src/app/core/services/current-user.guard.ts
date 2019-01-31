import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { CurrentUserService } from '@app/core/services';

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
  ): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create((observer: Observer<boolean>) => {
      this._currentUserService.getCurrentUser()
        .subscribe(
          (response) => {
            if (response === null) {
              this._router.navigate(['users/sign-in']);
            } else {
              observer.next(true);
              observer.complete();
            }
          }
        );
    })
  }
}
