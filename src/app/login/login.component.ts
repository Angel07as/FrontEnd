import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/apiservice.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  message: string;
  error: boolean;

  constructor(private apiService: ApiService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.apiService.login(this.email, this.password)
                   .subscribe( (response) => {
                     console.log('Respuesta de la API', response);
                     this.authService.setToken(response.token);
                     this.error = false;
                     this.message = response.message;
                     window.location.reload();
                   },
                   (err) => {
                     if (err.error.message){
                      this.error = true;
                      this.message = err.error.message;
                     }
                    console.log('Error en la respuesta de la API', err);
                     console.log('Error en la respuesta de la API', err.status);
                   });
  }

}
