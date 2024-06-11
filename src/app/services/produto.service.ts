import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl = 'http://localhost:8080/api/produto';

  constructor(private http: HttpClient) { }

  salvar(produto: any) {
    return this.http.post(this.apiUrl, produto);
  }
}
