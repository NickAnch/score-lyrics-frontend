import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { IUser } from '@lib/models';
import { CurrentUserService } from '@app/core/services';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  @Input() public profile: IUser;
  public form: FormGroup;

  constructor(
    private _currentUserService: CurrentUserService,
    private _snackBar: MatSnackBar,
  ) { }

  public ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(this.profile.username, [
        Validators.required,
      ]),
      birthday: new FormControl(this.profile.birthday),
      gender: new FormControl(this.profile.gender),
    });
  }

  public ngOnDestroy() { }

  public editProfile() {
    this._currentUserService.editProfile(this.form.value)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {
          this._snackBar.open('Profile data has been saved.', 'Undo', {
            duration: 2000
          });
        }
      );
  }

}
