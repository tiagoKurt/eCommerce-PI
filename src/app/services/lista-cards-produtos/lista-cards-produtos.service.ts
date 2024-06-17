import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/product';

@Injectable({
  providedIn: 'root',
})
export class ListaCardsProdutosService {
  apiUrl = 'http://localhost:8080/api/produto/';

  constructor(private http: HttpClient) {}

  pegarOrdenado(tipo: string): Observable<Product[]> {
    if (tipo != '') {
      this.apiUrl = this.apiUrl + '?tipoOrdenacao=' + tipo;
    } else {
      this.apiUrl = 'http://localhost:8080/api/produto/';
    }
    return this.http.get<Product[]>(this.apiUrl);
  }

  pegarOrdenadoPreco(tipo: string): Observable<Product[]> {
    this.apiUrl = 'http://localhost:8080/api/produto/preco';
    if (tipo != '') {
      this.apiUrl = this.apiUrl + '?tipoOrdenacao=' + tipo;
    } else {
      this.apiUrl = 'http://localhost:8080/api/produto/preco';
    }
    return this.http.get<Product[]>(this.apiUrl);
  }

  pegarOrdenadoQuantidade(tipo: string): Observable<Product[]> {
    this.apiUrl = 'http://localhost:8080/api/produto/quantidade';
    if (tipo != '') {
      this.apiUrl = this.apiUrl + '?tipoOrdenacao=' + tipo;
    } else {
      this.apiUrl = 'http://localhost:8080/api/produto/quantidade';
    }
    return this.http.get<Product[]>(this.apiUrl);
  }

  pegarOrdenadoCategoria(tipo: string): Observable<Product[]> {
    this.apiUrl = 'http://localhost:8080/api/produto/categoria';
    if (tipo != '') {
      this.apiUrl = this.apiUrl + '?tipoOrdenacao=' + tipo;
    } else {
      this.apiUrl = 'http://localhost:8080/api/produto/categoria';
    }
    return this.http.get<Product[]>(this.apiUrl);
  }

  pegarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
