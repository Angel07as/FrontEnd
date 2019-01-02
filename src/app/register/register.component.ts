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
      },
      (err) => {
        console.log('Error al registrar',err);
      });
  }

}
