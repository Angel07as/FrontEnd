import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-datos-proyecto',
  templateUrl: './datos-proyecto.component.html',
  styleUrls: ['./datos-proyecto.component.css']
})
export class DatosProyectoComponent implements OnInit {

  proyecto: Proyecto[];

  constructor() { }

  ngOnInit() {
  }

}
