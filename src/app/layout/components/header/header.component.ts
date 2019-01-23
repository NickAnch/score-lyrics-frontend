import { Component, OnInit, Input } from '@angular/core';
import { CurrentUserService } from '@app/core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(
    private _currentUserService: CurrentUserService,
    private _router: Router,
  ) { }

  get isLogged(): boolean {
    return this._currentUserService.isLoggedIn;
  }

  public signOut(): void {
    this._currentUserService.signOut()
      .subscribe(() => {
        this._router.navigate(['users/sign-in']);
      });
  }
}
