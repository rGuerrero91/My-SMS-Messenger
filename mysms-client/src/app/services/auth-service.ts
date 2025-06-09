import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  async login(email: string, password: string): Promise<void> {
    const response = await fetch(`${this.apiUrl}/users/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: { email, password } })
    });
    console.log('Auth response:', response);
    const authHeader = response.headers.get('Authorization');

    console.log('Auth header:', authHeader);
    if (authHeader) {
      localStorage.setItem('token', authHeader);
    }

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error?.message || 'Login failed');
    }
  }

  async signup(email: string, password: string): Promise<void> {
    const response = await fetch(`${this.apiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: { email, password } })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error?.message || 'Signup failed');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken() {
  const token = localStorage.getItem('token');
  console.log('Retrieved token from localStorage:', token);
  return token;
}

isLoggedIn(): boolean {
  const token = this.getToken();
  const loggedIn = !!token;
  console.log('AuthService.isLoggedIn():', loggedIn);
  return loggedIn;
}
}