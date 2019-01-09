import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {

  urlApiIntegration: string = "https://fis2018-01.herokuapp.com/api/v1/researchers?apikey=9806869c-22f0-4834-8025-77607ad275f6";
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.urlApiIntegration);
  }
}
