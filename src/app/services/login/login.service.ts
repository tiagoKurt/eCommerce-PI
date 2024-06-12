import { Injectable, NgModule } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoginUsuario } from '../../types/login';


export class AppModule { }

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://localhost:8080/api/usuario/login';

  constructor(private http: HttpClient) { }

  logar(login : LoginUsuario) {
    return this.http.post(this.apiUrl, login);
  }
}
