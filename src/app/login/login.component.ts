import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private authService: AuthenticationService, private router: Router) {}


  login(): void {
    if (this.authService.login(this.username, this.password)) {
      if (this.authService.getUserRole() === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/user-dashboard']);
      }
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

}
