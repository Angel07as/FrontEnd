import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/apiservice.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string;
  surname: string;
  phone: Number;
  email: string;
  password: string;
  departament: string;
  message: string;
  error: boolean;

  constructor(private apiService: ApiService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  signUp(){
    this.apiService.signUp({
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      phone: this.phone,
      departament: this.departament
    }).subscribe(
      (response: any) => {
        console.log(response);
        this.authService.setToken(response.token);
        this.error = false;
        this.message = response.message;
      },
      (err) => {
        if (err.error.message){
          this.error = true;
          this.message = err.error.message;
         }
        console.log('Error al registrar',err);
      });
  }

}
