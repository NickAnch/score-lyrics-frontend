import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { UserService } from '@app/user/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _userService: UserService,
    private _route: Router,
  ) { }

  ngOnInit() {
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

  public register(): void {
    this._userService.signUp(
      this.form.value.userName,
      this.form.value.email,
      this.form.value.password
    ).subscribe(() => this._route.navigateByUrl('users/sign-in'));
  }
}
