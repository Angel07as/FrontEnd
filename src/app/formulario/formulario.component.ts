import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../core/services/apiservice.service';
import { AuthService } from '../core/services/auth.service';
import { InvoiceCodeModel } from '../core/models/invoiceCodeModel';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  cifProvider: string;
  nameConcept: string;
  budget: number;
  message: string;
  error: boolean;
  dataSource;
  displayedColumns: string[] = ['invoice_code', 'button'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService,
              private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLogged) {
      this.apiService.getProjectsUser(this.authService.getToken()).subscribe(
        (response) => {
          console.log('Proyectos del usuario',response);
          this.addOptionsProject(response);
          this.addInvoiceCode(response);
          this.dataSource.paginator = this.paginator;
        },
        (err) => {
          console.log('Error al coger los proyectos del usuario', err);
        })
    }
  }

  addOptionsProject(projects) {
    let select = document.getElementById('selectProject');

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

  addInvoiceCode(projects) {

    let data = [];

    for(let i = 0; i < projects.length; i++) {
      let reservations = projects[i].reservations;
      if (reservations.length != 0) {
        reservations.forEach(element => {
          data.push({ _id: element._id, invoice_code: element.invoice_code });
        });
      }
    }

    this.dataSource = new MatTableDataSource<InvoiceCodeModel>(data);

    console.log('dataSource', this.dataSource.data);

  }

  submit() {
    this.message = undefined;
    if (this.cifProvider == undefined || this.nameConcept == undefined || this.budget == undefined) {
      this.message = 'Rellena los campos vacios';
      this.error = true;
    }
    let selectConcept = (document.getElementById("selectTypeConcept")) as HTMLSelectElement;
    let sel = selectConcept.selectedIndex;
    let opt = selectConcept.options[sel];
    let conceptType = opt.value;
    
    let  selectProject = (document.getElementById("selectProject")) as HTMLSelectElement;
    let selProject = selectProject.selectedIndex;
    let optProject = selectProject.options[selProject];
    let projectId = optProject.value;

    console.log(`CIF: ${this.cifProvider}\n
    ProyectoID: ${projectId}\n
    Concepto: ${this.nameConcept}, ${conceptType}\n
    Budget: ${this.budget}`);

    let params = {
      id_project: projectId,
      nif_provider: this.cifProvider,
      budget: this.budget,
      concept: {
        name: this.nameConcept,
        type: conceptType
      }
    }

    this.apiService.setReservation(this.authService.getToken(), params).subscribe(
      (response : any) => {
        console.log(response);
        this.message = response.message;
        this.error = false;
        this.addElementToData({ _id: response._id, invoice_code: response.invoice_code });
      },
      (err) => {
        console.log(err);
        if (err.error.message) {
          this.message = err.error.message;
          this.error = true;
        }
      }
    );
  }

  confirm(id) {
    this.apiService.confirmReservation(this.authService.getToken(), id).subscribe(
      (response) => {
        console.log(response);
        this.deleteElementFromData(id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addElementToData(element) {
    let data = this.dataSource.data;
    data.push({ _id: element._id, invoice_code: element.invoice_code });
    this.dataSource = new MatTableDataSource<InvoiceCodeModel>(data);
  }

  deleteElementFromData(id) {
    let data = this.dataSource.data;
    for(let i = 0; i < data.length; i++) {
      /* console.log(`ID data: ${typeof data[i]._id} ${data[i]._id} - ID: ${typeof id} ${id}`); */
      if (data[i]._id == id) {
        data.splice(i, 1);
        this.dataSource = new MatTableDataSource<InvoiceCodeModel>(data);
      }
    }
  }

}
