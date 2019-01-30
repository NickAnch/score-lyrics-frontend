import {
  IEntity,
  ISong,
} from '@lib/models';

export interface IUser extends IEntity {
  email: string;
  username: string;
  birthday?: Date;
  gender?: string;
  songs?: ISong[];
  // avatar: string;
}
