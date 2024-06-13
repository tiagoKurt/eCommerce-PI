import { Component, OnInit, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListaCardsProdutosService } from '../../services/lista-cards-produtos/lista-cards-produtos.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-cards-produtos',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './cards-produtos.component.html',
  styleUrl: './cards-produtos.component.scss',
})
export class CardsProdutosComponent implements OnInit {

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

}
