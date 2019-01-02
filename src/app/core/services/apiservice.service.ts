import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResultModel } from '../models/loginResultModel';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RequestBody } from '../models/requestBody';

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

}
