import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from './review.model';
import { Resource } from './resource.model';

@Injectable({
  providedIn: 'root',
})
export class MyCoursesService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getModules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/modules`);
  }

  getLessons(moduleId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/modules/${moduleId}/lessons`);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews`);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/reviews`, review);
  }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.apiUrl}/resources`);
  }
}
