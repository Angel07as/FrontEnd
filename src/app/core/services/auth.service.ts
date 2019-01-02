import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
