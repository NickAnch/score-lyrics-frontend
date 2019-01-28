import { Injectable } from '@angular/core';
import { ISong, IGenre, IVote } from '@lib/models';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class ManageSongService {
  private _songsUrl = `${environment.apiUrl}/songs`;
  private _genresUrl = `${environment.apiUrl}/genres`;

  constructor(
    private _http: HttpClient
  ) { }

  public addSong(song: ISong): Observable<ISong> {
    return this._http.post<ISong>(this._songsUrl, song);
  }

  public rateSong(id: number, mark: boolean): Observable<IVote> {
    const data = {
      rating: {
        mark: mark
      }
    };

    return Observable.create((observer: Observer<IVote>) => {
      this._http
        .post(`${this._songsUrl}/${id}/ratings`, data)
        .subscribe(
          (vote: IVote) => {
            observer.next(vote);
            observer.complete();
          },
          error => observer.error(error)
        );
    });
  }

  public getGenres(): Observable<IGenre[]> {
    return this._http.get<IGenre[]>(this._genresUrl);
  }
}
