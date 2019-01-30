import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '@app/core/services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Score Lyrics';

  constructor(
    private _currentUser: CurrentUserService,
    private _spinner: NgxSpinnerService,
  ) { }

  public ngOnInit() {
    this._spinner.show();
    this._currentUser.getCurrentUser()
      .subscribe(() => this._spinner.hide());
  }
}
