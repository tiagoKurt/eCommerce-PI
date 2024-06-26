import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroUsuario } from '../../types/cadastro-usuarios';
import { Endereco } from '../../types/endereco';
import { Carrinho } from '../../types/carrinho';
import { SourceTextModule } from 'vm';
import { response } from 'express';
import { Pedido } from '../../types/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  apiUrl = 'http://23.111.172.66:34202/api/pedido/';

  constructor(private http: HttpClient) { }

  fazerPedido(endereco : Endereco, total : number, carrinho : Carrinho) {
 
    const pedido = {
      id_endereco : endereco.id,
      totalPedido : total,
      id_carrinho : carrinho.id_carrinho,
      itemCarrinho : carrinho.itens
    }
    console.log(pedido)

   this.http.post(this.apiUrl,pedido).subscribe(
    (response)=>{
      console.log(response)
    }
   )
    
  }
  
  pegarPedidosUser(session : string): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.apiUrl + session);
  }

}
