import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSignUpService {
  private baseUrl = 'api/user'; // Update the base URL as per your backend API

  constructor(private http: HttpClient) { }

  saveUserDetails(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save`, userDetails);
  }

  // Add other methods as required
}
