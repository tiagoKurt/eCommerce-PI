import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../../types/login';
import { LoginResponse } from '../../types/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://23.111.172.66:34202/api/usuario/login';

  constructor(private http: HttpClient) { }

  logar(login: LoginUsuario): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, login);
  }
}
