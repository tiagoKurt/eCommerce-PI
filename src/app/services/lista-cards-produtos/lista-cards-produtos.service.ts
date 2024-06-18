import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/product';

@Injectable({
  providedIn: 'root',
})
export class ListaCardsProdutosService {
  apiUrl = 'http://23.111.172.66:34202/api/produto/';

  constructor(private http: HttpClient) {}

  pegarOrdenado(tipo : string): Observable<Product[]>{
    let url = ''
    if (tipo != ''){
      url = this.apiUrl +"gestor/"+ tipo

    }
    else{
      url =  'http://23.111.172.66:34202/api/produto/gestor/'
    }
    return this.http.get<Product[]>(url)
  }
  pegarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
