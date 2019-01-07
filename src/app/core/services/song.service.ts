import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISong } from '@lib/models';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private songsUrl = `${environment.apiUrl}/songs`;

  constructor(
    private _http: HttpClient,
  ) { }

  public getSongs(): Observable<ISong[]> {
    return this._http.get<ISong[]>(this.songsUrl);
  }

  public getSong(id: number): Observable<ISong> {
    const url = `${this.songsUrl}/${id}`;
    return this._http.get<ISong>(url);
  }
}
