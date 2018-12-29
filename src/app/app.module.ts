import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatosPersonaComponent } from './datos-persona/datos-persona.component';
import { DatosProyectoComponent } from './datos-proyecto/datos-proyecto.component';
import { DatosProveedorComponent } from './datos-proveedor/datos-proveedor.component';
import { ConceptoGastoComponent } from './concepto-gasto/concepto-gasto.component';
import { AdjuntarPdfComponent } from './adjuntar-pdf/adjuntar-pdf.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonaComponent,
    DatosProyectoComponent,
    DatosProveedorComponent,
    ConceptoGastoComponent,
    AdjuntarPdfComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
