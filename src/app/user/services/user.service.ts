import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usersUrl = `${environment.apiUrl}/users`;

  constructor(
    private _http: HttpClient,
  ) { }

  public signUp(
    username: string,
    email: string,
    password: string
  ): Observable<boolean> {
    const user = {
      username: username,
      email: email,
      password: password,
    };
    return this._http.post<boolean>(this._usersUrl, { user: user });
  }

}
