import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/core/models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user$: BehaviorSubject<User | null>;
  private _isLogged$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this._user$ = new BehaviorSubject(
      JSON.parse(localStorage.getItem('campus-navi-user')!)
    );
    this._isLogged$ = new BehaviorSubject(
      !!localStorage.getItem('campus-navi-token')
    );
  }

  signup(user: User) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signup`, user)
      .subscribe((res) => {
        localStorage.setItem('campus-navi-user', JSON.stringify(res.user));
        localStorage.setItem('campus-navi-token', res.token);
        this._user$.next(res.user);
        this._isLogged$.next(true);
      }
    );
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
      .subscribe((res) => {
        localStorage.setItem('campus-navi-user', JSON.stringify(res.user));
        localStorage.setItem('campus-navi-token', res.token);
        this._user$.next(res.user);
        this._isLogged$.next(true);
      }
    );
  }

  logout(): void {
    localStorage.removeItem('campus-navi-user');
    localStorage.removeItem('campus-navi-token');
    this._user$.next(null);
    this._isLogged$.next(false);
  }

  get user$(): Observable<User | null> {
    return this._user$.asObservable();
  }

  get isLogged$(): Observable<boolean> {
    return this._isLogged$.asObservable();
  }

  get token(): string | null {
    return localStorage.getItem('campus-navi-token');
  }
}
