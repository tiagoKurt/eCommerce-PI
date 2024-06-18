import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroUsuario } from '../../types/cadastro-usuarios';

@Injectable({
  providedIn: 'root'
})
export class CadastrarUsuarioService {

  apiUrl = 'http://23.111.172.66:34202/api/usuario/';

  constructor(private http: HttpClient) { }

  criarUsuario(usuario : CadastroUsuario) {
    return this.http.post(this.apiUrl, usuario);
  } 
}
