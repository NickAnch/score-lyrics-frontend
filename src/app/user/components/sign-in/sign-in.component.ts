import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrentUserService } from '@app/core/services';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../styles/auth.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  constructor(
    private _currentUserService: CurrentUserService,
    private _route: Router,
  ) { }

  public ngOnInit() {
    this._initForm();
  }

  public ngOnDestroy() { }

  private _initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
    });
  }

  public signIn(): void {
    this._currentUserService.signIn(
      this.form.value.email,
      this.form.value.password
    ).pipe(untilDestroyed(this))
    .subscribe(() => this._route.navigate(['']));
  }
}
