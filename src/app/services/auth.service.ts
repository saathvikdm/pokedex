import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loggedIn = new Subject<boolean>();

  login(email: string, password: string) {
    return this.http.post(
      'http://localhost:5226/api/Token',
      {
        email,
        password,
      },
      { responseType: 'text' }
    );
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  isLoggedIn() {
    if (localStorage.getItem('id_token')) {
      return true;
    } else {
      return false;
    }
  }
}
