import { Component } from '@angular/core';
import { MenubarComponent } from '../../component/menubar/menubar.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ListaCardsProdutosService } from '../../services/lista-cards-produtos/lista-cards-produtos.service';
import { Product } from '../../types/product';
import { ProdutoService } from '../../services/produto/produto.service';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MenubarComponent, ButtonModule, TagModule, CommonModule, CardModule, TableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  id: number = 0;
  products: Product[] = [];

  constructor(
    private produtosService: ListaCardsProdutosService,
  ) { }

  ngOnInit(): void {
    this.produtosService.pegarProdutos().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error: any) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }
  pegarOrdenado(tipo : string) : void{
    this.produtosService.pegarOrdenado(tipo).subscribe(
      (data : Product[]) =>{
        console.log(data)
       this.products = data;
      }
    )
  }
}
