import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Progress } from './progress.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private apiUrl = 'http://localhost:3000/progress';

  constructor(private http: HttpClient) {}

  getProgress(): Observable<Progress[]> {
    return this.http.get<Progress[]>(this.apiUrl);
  }
}
