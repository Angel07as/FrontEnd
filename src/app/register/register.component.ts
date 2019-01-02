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
