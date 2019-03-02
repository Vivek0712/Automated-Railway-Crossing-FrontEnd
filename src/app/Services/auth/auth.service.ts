import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private jwtHelper: JwtHelper, private http: HttpClient) { }

  authenticate(phoneNumber: any, password: any) {
    const body = { userPhoneNumber: phoneNumber, password: password };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/authenticate', body).pipe(map(res => res, { 'headers': headers }));
  }

  createSession(response: any) {
    console.log(JSON.stringify(response.data.user))
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.token);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }
}
