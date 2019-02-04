import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Observable,
  Observer,
  of,
} from 'rxjs';
import { IUser } from '@lib/models';
import { tap } from 'rxjs/operators';

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
    if (!localStorage.getItem('token')) {
      return of(null);
    }

    return this._http
      .get<IUser>(this._profileUrl)
      .pipe(
        tap(user => this._currentUser = user),
      );
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

  public editProfile(user: IUser): Observable<IUser> {
    return this._http
      .put<IUser>(this._profileUrl, { user: user })
      .pipe(
        tap((curUser: IUser) => this._currentUser = curUser),
      );
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
