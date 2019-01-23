import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from '@app/core/services';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserGuard implements CanActivate {
  constructor(
    private _currentUserService: CurrentUserService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
