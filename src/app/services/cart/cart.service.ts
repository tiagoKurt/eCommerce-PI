import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../types/product';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Carrinho, CarrinhoResponseSave } from '../../types/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = 'http://23.111.172.66:34202/api/carrinho/';
  apiItens = "http://23.111.172.66:34202/api/item/carrinho/"


  constructor(private http: HttpClient, private cookie : CookieService) { }

  

  adicionarCarrinho(product : Product) {
    const session = this.cookie.get('SESSION_TOKEN');
    const carrinho = this.http.get<Carrinho>(this.apiUrl + session).subscribe(
      (carrinho) => {
        
        if(carrinho.id_carrinho && (carrinho.status === "PENDENTE" || carrinho.status === "PARCIALMENTE_CONCLUIDO")){
            console.log("if")
          if(carrinho.itens.map((itens) => itens.id ===product.id).includes(true)){
          }else{
          const itensCarrinho = {
            quantidade : 1,
            id_produto : product.id,
            id_carrinho : carrinho.id_carrinho
          }

          this.http.post<Carrinho>(this.apiItens,itensCarrinho).subscribe(
            (response) =>{
              return response
            }
          )
        }
        }
        else{
          this.http.post<CarrinhoResponseSave>(this.apiUrl, {"id" : session}).subscribe(
            (response : CarrinhoResponseSave) => {
              const itensCarrinho = {
                quantidade : 1,
                id_produto : product.id,
                id_carrinho : response.id
              }

              this.http.post<Carrinho>(this.apiItens,itensCarrinho).subscribe(
                (response) =>{
                }
              )

            }
          )
        
        }
      }
    );

    return carrinho
  }
}
