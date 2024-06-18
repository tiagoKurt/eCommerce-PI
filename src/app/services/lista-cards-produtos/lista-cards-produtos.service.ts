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

  pegarOrdenado(tipo : string): Observable<Product[]>{
    let url = ''
    if (tipo != ''){
      url = this.apiUrl + tipo

    }
    else{
      url =  'http://localhost:8080/api/produto/'
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
