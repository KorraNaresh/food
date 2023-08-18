import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = 'api/auth'; // Update the base URL as per your backend API

  constructor(private http: HttpClient) { }

  login(phoneNumber: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { phoneNumber, password })
      .pipe(
        map(response => {
          localStorage.setItem('token', response.token);
          return response;
        })
      );
  }

  isAdmin(): boolean {
    // Implement your logic to check if the logged-in user is an admin or not
    // You can retrieve the user role from the token or make an API call to get the user details
    // Return true if the user is an admin, otherwise return false
    return false;
  }
}
