import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticated = false;
  userRole!: string;

  login(username: string, password: string): boolean {
    // Your authentication logic here
    // For simplicity, let's use a basic username and password check
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.userRole = 'admin';
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      this.userRole = 'user';
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.isAuthenticated = false;
  
    //this.userRole = null;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): string | null {
    return this.userRole;
  }
}
