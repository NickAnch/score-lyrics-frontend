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

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  @Input() profile: IUser;
  public form: FormGroup;

  constructor(
    private _currentUserService: CurrentUserService,
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
      .subscribe();
  }

}
