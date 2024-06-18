import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { CartService } from '../../services/cart/cart.service';
import { Carrinho, ItensCarrinho } from '../../types/carrinho';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderListModule } from 'primeng/orderlist';
import { Endereco } from '../../types/endereco';
import { PedidoService } from '../../services/pedido/pedido.service';

@Component({
  selector: 'app-resumo-pedido',
  standalone: true,
  imports: [MenubarUsuarioComponent, CardModule, ButtonModule],
  templateUrl: './resumo-pedido.component.html',
  styleUrl: './resumo-pedido.component.scss'
})
export class ResumoPedidoComponent implements OnInit{
  itensCarrinho: ItensCarrinho[] =  [];
  enderecos: Endereco = {
    id: 0,
    cep: '',
    complemento: '',
    bairro: '',
    rua: '',
    numero: '',
    uf: '',
    cidade: '',
    session_token: ''
  };
  total : number = 0
  carrinho : Carrinho = {
    itens : [],
    id_carrinho : 0,
    status : ''

  }

  constructor( private cartService : CartService, private router : Router, private pedidoService : PedidoService) {
      const navigation = this.router.getCurrentNavigation();
      this.enderecos = navigation?.extras?.state?.['data']
      this.carrinho = navigation?.extras?.state?.['dataCarrinho']
  }
  
  ngOnInit(): void {
    

    this.cartService.pegarItensCarrinho().subscribe(
      (data: Carrinho) => {
        this.itensCarrinho = data.itens;
        this.itensCarrinho?.map((valor)=>{this.total+=valor.precoTotal});
      },
      (error: any) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  fazerPedido(){
   this.pedidoService.fazerPedido(this.enderecos, this.total, this.carrinho)
  }
}
