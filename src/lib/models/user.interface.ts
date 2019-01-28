import {
  IEntity,
  ISong,
} from '@lib/models';

export interface IUser extends IEntity {
  email: string;
  username: string;
  birthday: Date;
  gender: number;
  songs?: ISong[];
  // avatar: string;
}
