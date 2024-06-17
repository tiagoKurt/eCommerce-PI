import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProductComponent } from '../../admin/product/product.component';
import { Product } from '../../types/product';
import { Observable } from 'rxjs';

export class AppModule { }

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  apiUrl = 'http://23.111.172.66:34202/api/produto/';

  constructor(private http: HttpClient) { }

  salvar(produto : Product)  {
    return this.http.post(this.apiUrl, produto);
  }

}
