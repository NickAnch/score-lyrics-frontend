import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Observable,
  Observer,
} from 'rxjs';
import { IUser } from '@lib/models';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private _usersUrl = `${environment.apiUrl}/users`;
  private _profileUrl = `${environment.apiUrl}/profile`;
  private _currentUser: IUser;

  constructor(
    private _http: HttpClient,
  ) { }

  static setTokenByHeaders(headers: HttpHeaders) {
    let token: string = headers.get('authorization');
    token = token.split(' ')[1];
    localStorage.setItem('token', token);
  }

  get isLoggedIn(): boolean {
     return !!this._currentUser;
  }

  get currentUser(): IUser {
    return this._currentUser;
  }

  public getCurrentUser(): Observable<IUser> {
    return Observable.create((observer: Observer<IUser>) => {
      if (localStorage.getItem('token')) {
        this._http
          .get<IUser>(this._profileUrl)
          .subscribe(
            (res) => {
              this._currentUser = res;
              observer.next(res);
              observer.complete();
            },
            error => observer.error(error)
          );
      } else {
        observer.next(null);
        observer.complete();
      }
    });
  }

  public signIn(email: string, password: string): Observable<boolean> {
    const data = {
      user: {
        email: email,
        password: password
      }
    };

    return Observable.create((observer: Observer<boolean>) => {
      this._http
        .post(`${this._usersUrl}/sign_in`, data, { observe: 'response' })
        .subscribe(
          (res) => {
            CurrentUserService.setTokenByHeaders(res.headers);
            this.getCurrentUser().subscribe(
              () => {
                observer.next(true);
                observer.complete();
              }
            );
          },
          error => observer.error(error)
        );
    });
  }

  public signUp(
    username: string,
    email: string,
    password: string): Observable<IUser> {

    const user = {
      username: username,
      email: email,
      password: password,
    };

    return this._http.post<IUser>(this._usersUrl, { user: user });
  }

  public signOut(): Observable<boolean> {
    return Observable.create((observer: Observer<boolean>) => {
      this._http
        .delete(`${this._usersUrl}/sign_out`)
        .subscribe(
          () => {
            this._currentUser = null;
            localStorage.removeItem('token');
            observer.next(true);
            observer.complete();
          },
          error => observer.error(error)
        );
    });
  }
}
