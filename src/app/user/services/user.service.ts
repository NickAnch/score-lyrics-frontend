import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { IUser } from '@lib/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _apiUrl = `${environment.apiUrl}/users`;

  constructor(
    private _http: HttpClient,
  ) { }

  public getUser(id: number): Observable<IUser> {
    const url = `${this._apiUrl}/${id}`;
    return this._http.get<IUser>(url);
  }

}
