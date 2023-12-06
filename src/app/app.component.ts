import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';


  constructor(private authService: AuthenticationService,private router:Router) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  form(): void {
    //this.authService.logout();
    this.router.navigate(['/form'])
  }
}
