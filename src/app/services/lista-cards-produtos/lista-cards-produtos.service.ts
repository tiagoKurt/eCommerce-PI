import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/product';

@Injectable({
  providedIn: 'root'
})
export class ListaCardsProdutosService {
  apiUrl = 'http://localhost:8080/api/produto/';

  
  constructor(private http: HttpClient) {}

  pegarProdutos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
