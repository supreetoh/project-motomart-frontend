import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  isRegistering: boolean = false; // Initial state set to false (show login by default)

  // Method to switch to the registration form
  toggleRegister() {
    this.isRegistering = true;
  }

  // Method to switch to the login form
  toggleLogin() {
    this.isRegistering = false;
  
  }
}
