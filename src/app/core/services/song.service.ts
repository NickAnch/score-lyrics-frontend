import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { ISong } from '@lib/models';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private _songsUrl = `${environment.apiUrl}/songs`;

  constructor(
    private _http: HttpClient,
  ) { }

  public getSongs(params?: string): Observable<ISong[]> {
    const url = params ?
      `${this._songsUrl}?filtered=${params}` : this._songsUrl;
    return this._http.get<ISong[]>(url);
  }

  public getSong(id: number): Observable<ISong> {
    const url = `${this._songsUrl}/${id}`;
    return this._http.get<ISong>(url);
  }
}
