import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { Observable, Observer } from 'rxjs';
import { IVote } from '@lib/models';

@Injectable()
export class RatingService {
  private _songsUrl = `${environment.apiUrl}/songs`;

  constructor(
    private _http: HttpClient,
  ) { }

  public rateSong(id: number, mark: boolean): Observable<IVote> {
    const data = {
      rating: {
        mark: mark
      }
    };

    // FIXME: remove it
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
}
