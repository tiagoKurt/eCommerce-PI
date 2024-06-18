import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { CartService } from '../../services/cart/cart.service';
import { Carrinho, ItensCarrinho } from '../../types/carrinho';
import { Router } from '@angular/router';
import { OrderListModule } from 'primeng/orderlist';

@Component({
  selector: 'app-resumo-pedido',
  standalone: true,
  imports: [MenubarUsuarioComponent, CardModule, ButtonModule],
  templateUrl: './resumo-pedido.component.html',
  styleUrl: './resumo-pedido.component.scss'
})
export class ResumoPedidoComponent implements OnInit{
  itensCarrinho: ItensCarrinho[] =  [];

  constructor( private cartService : CartService, private router: Router) {
  }


  ngOnInit(): void {
    this.cartService.pegarItensCarrinho().subscribe(
      (data: Carrinho) => {
        this.itensCarrinho = data.itens;
      },
      (error: any) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }
}
