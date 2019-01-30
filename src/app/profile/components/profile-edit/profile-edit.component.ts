import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IUser } from '@lib/models';
import { CurrentUserService } from '@app/core/services';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent implements OnInit {
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
    console.log(this.form.value);
  }

  public editProfile() {
    this._currentUserService.editProfile(this.form.value).subscribe(
      (user) => {
        console.log(user);
      }
    );
  }

}
