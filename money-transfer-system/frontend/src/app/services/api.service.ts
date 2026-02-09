import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  getBalance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/balance`);
  }

  transfer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/transfer`, data);
  }

  getHistory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transactions`);
  }
}
