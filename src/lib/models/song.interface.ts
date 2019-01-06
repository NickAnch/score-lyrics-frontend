import { IEntity } from './entity.interface';

export type IRating = './rating.interface';
export type IUser = './user.interface';

export interface ISong extends IEntity {
    singer: string;
    name: string;
    views: number;
    rating: IRating;
    genre?: string;
    lyrics?: string;
    translate?: string;
    linkURL?: string;
    author?: IUser;
}
