import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'credito-app';

  constructor(private authService: AuthService) {}

  isLogged() {
    return this.authService.isLogged();
  }
}
