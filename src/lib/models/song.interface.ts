import {
    IEntity,
    IRating,
    IVote,
    IUser,
} from '@lib/models';

export interface ISong extends IEntity {
    singer: string;
    name: string;
    views: number;
    rating: IRating;
    vote: IVote;
    genre_id: number;
    genre_name?: string ;
    lyrics?: string;
    translate?: string;
    linkUrl?: string;
    author?: IUser;
}
