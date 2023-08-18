import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   
  constructor(private http:HttpClient) { }

  private baseURL = 'http://localhost:8085/api/save'; 

  private baseURL1 = 'http://localhost:8085/api/login'


  saveData(formData: FormData){
    return this.http.post(`${this.baseURL}`,formData);

  }
  getUserData(requestBody: any) {
    return this.http.post(`${this.baseURL1}`, requestBody, { headers: { 'Content-Type': 'application/json' } });
  }
  
  


}
