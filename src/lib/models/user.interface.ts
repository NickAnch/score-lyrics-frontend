import { IEntity } from './entity.interface';

export type ISong = './song.interface';

export interface IUser extends IEntity {
  username: string;
  birthday: Date;
  gender: number;
  songs?: ISong[];
  // avatar: string;
}
