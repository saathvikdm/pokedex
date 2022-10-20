import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  TOKEN_URL: string = 'http://localhost:5226/api/Token';
  USER_URL: string = 'http://localhost:5226/api/Users';

  loggedIn = new Subject<boolean>();

  login(email: string, password: string) {
    return this.http.post(
      this.TOKEN_URL,
      {
        email,
        password,
      },
      { responseType: 'text' }
    );
  }

  signUp(
    email: string,
    username: string,
    password: string,
    displayname: string
  ) {
    return this.http.post(this.USER_URL, {
      displayname,
      username,
      email,
      password,
    });
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
