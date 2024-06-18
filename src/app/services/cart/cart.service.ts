import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../types/product';
import { CookieService } from 'ngx-cookie-service';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { Carrinho, CarrinhoResponseSave, ItensCarrinho } from '../../types/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = 'http://localhost:8080/api/carrinho/';
  apiItens = "http://localhost:8080/api/item/carrinho/"


  constructor(private http: HttpClient, private cookie : CookieService) { }

  

  adicionarCarrinho(product : Product) {
    const session = this.cookie.get('SESSION_TOKEN');
    const carrinho = this.http.get<Carrinho>(this.apiUrl + session).subscribe(
      (carrinho) => {
          console.log(carrinho)
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

  pegarItensCarrinho(): Observable<Carrinho> {
    const session = this.cookie.get('SESSION_TOKEN');
    return this.http.get<Carrinho>(this.apiUrl + session);
  }

  excluirItensCarrinho(idCarrinho: number): Observable<void[]> {
    return this.http.get<Carrinho>(this.apiUrl + idCarrinho).pipe(
      switchMap((carrinho: Carrinho) => {
        const deleteRequests = carrinho.itens.map((item: ItensCarrinho) => this.http.delete<void>(this.apiItens + item.id));
        return forkJoin(deleteRequests);
      })
    );
  }

  excluirCarrinho(idCarrinho: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + idCarrinho);
  }

  aumentarQuantidade(item : ItensCarrinho){
    this.http.get<ItensCarrinho>(this.apiItens + item.id).subscribe(
      (itemResponse) => {
        itemResponse.quantidade = item.quantidade

        console.log(itemResponse)
        this.http.put<ItensCarrinho>(this.apiItens, itemResponse).subscribe(
          
          (response) => {
            return response
          }
        )
      }
    )
  }

  diminuirQuantidade(item : ItensCarrinho){
    this.http.get<ItensCarrinho>(this.apiItens + item.id).subscribe(
      (itemResponse) => {
        itemResponse.quantidade = item.quantidade

        console.log(itemResponse)
        this.http.put<ItensCarrinho>(this.apiItens, itemResponse).subscribe(
          
          (response) => {
            return response
          }
        )
      }
    )
  }

}
