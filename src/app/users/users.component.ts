import { Component, OnInit } from '@angular/core';
import { ApiIntegrationService } from '../core/services/api-integration.service';
import { ApiService } from '../core/services/apiservice.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = ['name','dni', 'button'];
  idProject;

  constructor(private apiIntegration: ApiIntegrationService,
              private apiService: ApiService,
              private authService: AuthService) { }

  ngOnInit() {
    this.apiIntegration.getUsers().subscribe(
      (response: Array<any>) => {
        if (response) {
          response.forEach(research => {
            research.email = `${research.name}@gmail.com`,
            research.password = research.name;
            return research;
          });
        }
        this.dataSource = response;
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    )
    this.apiService.getProjects().subscribe(
      (response) => {
        this.idProject = response[0]._id;
        console.log('Proyectos cogido por users',response[0]._id);
      },
      (err) => {
        console.log('Error al coger los proyectos del usuario', err);
      })
  }

  signIn(research) {
    this.apiService.login(research.email, research.password).subscribe(
      (response) => {
        console.log(response);
        console.log('Usuario logueado');
        this.authService.setToken(response.token);
        window.location.reload();
      },
      (err) => {
        if(err.status == 400) {
          console.log('Usuario no registrado, se registra');
          this.apiService.signUp({
            email: research.email,
            password: research.password,
            name: research.name,
            surname: research.surname,
            departament: research.department,
            projects: [this.idProject]
          }).subscribe(
            (response: any) => {
              console.log('Se ha registrado el usuario');
              this.authService.setToken(response.token);
              window.location.reload();
            },
            (err) => {
              console.log(err);
            }
          )
        }
        console.log(err);
      }
    );
  }

}
