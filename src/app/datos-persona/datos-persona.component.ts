import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-datos-persona',
  templateUrl: './datos-persona.component.html',
  styleUrls: ['./datos-persona.component.css']
})
export class DatosPersonaComponent implements OnInit {

  persona: Persona[];

  constructor() { }

  ngOnInit() {
  }

}
