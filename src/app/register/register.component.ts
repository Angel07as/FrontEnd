import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/apiservice.service';
import { AuthService } from '../core/services/auth.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

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
  registerForm: FormGroup;
  account_validation_messages = {
    'name': [
      { type: 'required', message: 'Nombre requerido' },
      { type: 'pattern', message: 'Sólo puede contener letras' }
    ],
    'surname': [
      { type: 'required', message: 'Apellidos requeridos' },
      { type: 'pattern', message: 'Sólo puede contener letras' }
    ],
    'email': [
      { type: 'required', message: 'Email requerido' },
      { type: 'pattern', message: 'Formato erróneo' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña requerida' }
    ],
    'phone': [
      { type: 'pattern', message: 'Sólo puede contener números' },
      { type: 'minlength', message: 'Mínimo de 9 números' }
    ],
    'departament': [
      { type: 'pattern', message: 'Sólo puede contener letras' }
    ]
  }

  constructor(private apiService: ApiService,
              private authService: AuthService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])),
      surname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ])),
      password: new FormControl('',
      Validators.required),
      phone: new FormControl(null, Validators.compose([
        Validators.minLength(9),
        Validators.pattern('[0-9]+')
      ])),
      departament: new FormControl('', Validators.compose([
        Validators.pattern('[a-zA-Z]+')
      ]))
    });
  }

  ngOnInit() {
    if (this.authService.isLogged) {
      this.apiService.getProjects().subscribe(
        (response) => {
          console.log('Proyectos en la BD',response);
          this.addOptionsProject(response);
        },
        (err) => {
          console.log('Error al coger los proyectos del usuario', err);
        })
    }
  }

  addOptionsProject(projects) {
    let select = document.getElementById('selectSignUp');

    // Eliminamos las opciones existentes
    if (select.childElementCount != 0) {
      for(let i = 0; i < select.childElementCount; i++) {
        select.children[i].remove();
      }
    }

    console.log(projects.length);
    // Añadimos las opciones de proyectos
    for (var i = 0; i < projects.length; i++){
        var opt = document.createElement('option');
        opt.value = projects[i]._id;
        opt.innerHTML = projects[i].name;
        select.appendChild(opt);
    }
  }

  signUp(){
    let  selectProject = (document.getElementById("selectSignUp")) as HTMLSelectElement;
    let selProject = selectProject.selectedIndex;
    let optProject = selectProject.options[selProject];
    let projectId = optProject.value;

    console.log(projectId);

    this.apiService.signUp({
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      phone: this.phone,
      departament: this.departament,
      projects: [projectId]
    }).subscribe(
      (response: any) => {
        console.log(response);
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
        console.log('Error al registrar',err);
      });
  }

}
