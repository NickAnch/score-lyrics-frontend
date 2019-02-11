import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrentUserService } from '@app/core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../styles/auth.scss']
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _currentUserService: CurrentUserService,
    private _route: Router,
  ) { }

  public ngOnInit() {
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
    ).subscribe(() => this._route.navigate(['']));
  }
}
