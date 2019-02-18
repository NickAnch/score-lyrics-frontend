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
    return this._http.post<IVote>(`${this._songsUrl}/${id}/ratings`, data);
  }
}
