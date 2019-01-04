import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/apiservice.service';
import { AuthService } from '../core/services/auth.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

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
  loginForm: FormGroup;
  account_validation_messages = {
    'email': [
      { type: 'required', message: 'Email requerido' },
      { type: 'pattern', message: 'Formato erróneo' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña requerida' }
    ]
  }

  constructor(private apiService: ApiService,
              private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])),
      password: new FormControl('',
      Validators.required)
    });
  }

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
