import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  template: `
    <button (click)="login()">Login</button>
  `,
})
export class LoginPageComponent {
  constructor(private readonly router: Router) {}

  login() {
    this.router.navigate(['/portal']);
  }
}
