import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResultModel } from '../models/loginResultModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RequestBody } from '../models/requestBody';
import { ReservationBody } from '../models/reservationBody';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/signIn`, {
      email: email,
      password: password
    });
  }

  signUp(params: RequestBody) {
    console.log(params);
    return this.http.post(`${environment.apiUrl}/signUp`, params);
  }

  getProjectsUser(token: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': token
    });
    return this.http.get(`${environment.apiUrl}/projectUser`, { headers: headers });
  }

  getProjects() {
    return this.http.get(`${environment.apiUrl}/projects`);
  }

  setReservation(token: string, params: ReservationBody) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': token
    });
    return this.http.post(`${environment.apiUrl}/setReservation`, params, { headers: headers });
  }

  confirmReservation(token: string, param) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': token
    });
    let body = { id_reservation: param };
    return this.http.post(`${environment.apiUrl}/confirmReservation`, body, { headers: headers });
  }

}
