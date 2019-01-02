import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ApiService
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
   ],
})
export class CoreModule { }