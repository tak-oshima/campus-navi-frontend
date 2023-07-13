import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { School } from '../models/school';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _school$ = new BehaviorSubject<School | null>(null);

  constructor(private http: HttpClient) { }

  get school$(): Observable<School | null> {
    return this._school$.asObservable();
  }

  set school(school: School | null) {
    this._school$.next(school);
  }

  searchSchools(query: string): Observable<School[]> {
    return this.http.get<School[]>(`${environment.apiUrl}/schools`, {
      params: {
        query: query
      }
    });
  }

  searchProfessors(schoolId: number, query: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/professors`, {
      params: {
        schoolId: schoolId.toString(),
        query: query
      }
    });
  }
}
