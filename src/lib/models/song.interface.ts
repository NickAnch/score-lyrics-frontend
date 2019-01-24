import { IEntity } from './entity.interface';
import { IGenre } from './genre.interface';

export type IRating = './rating.interface';
export type IUser = './user.interface';

export interface ISong extends IEntity {
    singer: string;
    name: string;
    views: number;
    rating: IRating;
    genre_id: number;
    genre_name?: string ;
    lyrics?: string;
    translate?: string;
    linkUrl?: string;
    author?: IUser;
}
