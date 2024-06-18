import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../../types/endereco';
import { Observable } from 'rxjs';
import { SourceTextModule } from 'vm';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  apiUrl = 'http://23.111.172.66:34202/api/endereco/';

  constructor(private http: HttpClient, private cookie : CookieService) { }

  salvar(endereco : Endereco) {
    return this.http.post(this.apiUrl, endereco);
  }

  pegarCep(cep : string) :Observable<Endereco>{
    console.log(this.apiUrl + cep)
    return this.http.get<Endereco>(this.apiUrl + cep);
  }

  pegarEnderecosUsuario(): Observable<Endereco[]> {
    const session = this.cookie.get('SESSION_TOKEN');
    return this.http.get<Endereco[]>(this.apiUrl + session);
  }
}
