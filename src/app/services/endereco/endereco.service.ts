import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../../types/endereco';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  apiUrl = 'http://localhost:8080/api/endereco/';

  constructor(private http: HttpClient) { }


  salvar(endereco : Endereco) {
    return this.http.post(this.apiUrl, endereco);
  }

  pegarCep(cep : string) :Observable<Endereco>{
    console.log(this.apiUrl + cep)
    return this.http.get<Endereco>(this.apiUrl + cep);
  }

  pegarEnderecosUsuario(session : string): Observable<Endereco[]> {
  
    return this.http.get<Endereco[]>(this.apiUrl +"user/"+ session);
  }
}
