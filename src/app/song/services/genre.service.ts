import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGenre } from '@lib/models';

@Injectable()
export class GenreService {
  private _genresUrl = `${environment.apiUrl}/genres`;

  constructor(
    private _http: HttpClient,
  ) { }

  public getGenres(): Observable<IGenre[]> {
    return this._http.get<IGenre[]>(this._genresUrl);
  }
}
