import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProductComponent } from '../admin/product/product.component';


export class AppModule { }

type Product = {
  nome: string;
  descricao: string;
  preco: string;
  quantidade: string;
  tipoProduto: string;
  imagem: string;

}
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl = 'http://localhost:8080/api/produto';

  constructor(private http: HttpClient) { }

  salvar(produto : Product) {
    return this.http.post(this.apiUrl, produto);
  }
}
