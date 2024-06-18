import { Component, OnInit, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListaCardsProdutosService } from '../../services/lista-cards-produtos/lista-cards-produtos.service';
import { Product } from '../../types/product';
import { CartService } from '../../services/cart/cart.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-cards-produtos',
  standalone: true,
  imports: [CardModule, ButtonModule,ToastModule],
  templateUrl: './cards-produtos.component.html',
  styleUrl: './cards-produtos.component.scss',
  providers: [MessageService],
})
export class CardsProdutosComponent implements OnInit {

  products: Product[] = [];

  constructor(private produtosService: ListaCardsProdutosService, private cartService : CartService, private messageService : MessageService) {}

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
  
  adicionarCarrinho(product: Product) {
    this.cartService.adicionarCarrinho(product);
    this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Produto foi adicionado ao carrinho com sucesso!' });
  }

}
