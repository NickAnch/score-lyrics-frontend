import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUserService } from '@app/core/services';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../styles/auth.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
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
      userName: new FormControl('', [
        Validators.required
      ]),
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

  public signUp(): void {
    this._currentUserService.signUp(
      this.form.value.userName,
      this.form.value.email,
      this.form.value.password
    ).pipe(untilDestroyed(this))
    .subscribe(() => this._route.navigate(['users/sign-in']));
  }
}
