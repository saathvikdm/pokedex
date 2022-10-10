import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginSubscription = new Subscription();
  loggedIn = false;

  logout() {
    localStorage.removeItem('id_token');
    // this.loggedIn = false;
    this.authService.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.loginSubscription = this.authService.loggedIn.subscribe(
      (val) => (this.loggedIn = val)
    );

    this.loggedIn = this.authService.isLoggedIn();
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }
}
