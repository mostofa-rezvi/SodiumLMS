import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemoCourse } from './explore.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  private apiUrl = 'http://localhost:3000/democourses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<DemoCourse[]> {
    return this.http.get<DemoCourse[]>(this.apiUrl);
  }
}
