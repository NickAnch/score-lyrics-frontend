import { Injectable } from '@angular/core';
import { ISong } from '@lib/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class ManageSongService {
  private _songsUrl = `${environment.apiUrl}/songs`;

  constructor(
    private _http: HttpClient,
  ) { }

  public addSong(song: ISong): Observable<ISong> {
    return this._http.post<ISong>(this._songsUrl, song);
  }
}
