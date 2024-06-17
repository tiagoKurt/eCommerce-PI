import { Component } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Product } from '../../types/product';
import { ListaCardsProdutosService } from '../../services/lista-cards-produtos/lista-cards-produtos.service';

@Component({
  selector: 'app-lista-pedidos',
  standalone: true,
  imports: [
    MenubarComponent,
    MenubarComponent,
    ButtonModule,
    TagModule,
    CommonModule,
    CardModule,
    TableModule,
  ],
  templateUrl: './lista-pedidos.component.html',
  styleUrl: './lista-pedidos.component.scss',
})
export class ListaPedidosComponent {
  id: number = 0;
  products: Product[] = [];

  constructor(private produtosService: ListaCardsProdutosService) {}

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
  pegarOrdenado(tipo: string): void {
    this.produtosService.pegarOrdenado(tipo).subscribe((data: Product[]) => {
      console.log(data);
      this.products = data;
    });
  }
  pegarOrdenadoValor(tipo: string): void {
    this.produtosService
      .pegarOrdenadoPreco(tipo)
      .subscribe((data: Product[]) => {
        console.log(data);
        this.products = data;
      });
  }
  pegarOrdenadoQuantidade(tipo: string): void {
    this.produtosService
      .pegarOrdenadoQuantidade(tipo)
      .subscribe((data: Product[]) => {
        console.log(data);
        this.products = data;
      });
  }
  pegarOrdenadoCategoria(tipo: string): void {
    this.produtosService
      .pegarOrdenadoCategoria(tipo)
      .subscribe((data: Product[]) => {
        console.log(data);
        this.products = data;
      });
  }
}
