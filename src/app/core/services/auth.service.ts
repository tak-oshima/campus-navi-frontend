import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/core/models/user';
import { School } from '@app/core/models/school';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { SearchService } from '@app/core/services/search.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user$: BehaviorSubject<User | null>;
  private _isLogged$: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private searchService: SearchService) {
    const userJson = localStorage.getItem('campus-navi-user');
    this._user$ = new BehaviorSubject(
      userJson ? JSON.parse(userJson) as User : null
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
