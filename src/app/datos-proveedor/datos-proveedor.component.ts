import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../proveedor';

@Component({
  selector: 'app-datos-proveedor',
  templateUrl: './datos-proveedor.component.html',
  styleUrls: ['./datos-proveedor.component.css']
})
export class DatosProveedorComponent implements OnInit {

  proveedor: Proveedor[];
  constructor() { }

  ngOnInit() {
  }

}
