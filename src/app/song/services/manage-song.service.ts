import { Injectable } from '@angular/core';
import { ISong, IGenre } from '@lib/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  public getGenres(): Observable<IGenre[]> {
    return this._http.get<IGenre[]>(this._genresUrl);
  }
}
