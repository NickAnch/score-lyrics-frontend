import { IEntity } from './entity.interface';

export interface IRating extends IEntity {
  likes: number;
  dislikes: number;
}
