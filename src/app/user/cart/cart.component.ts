import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { CommonModule } from '@angular/common';
import { ProdutosCarrinhoComponent } from '../../component/produtos-carrinho/produtos-carrinho.component';
import { DividerModule } from 'primeng/divider';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CartService } from '../../services/cart/cart.service';
import { Carrinho, ItensCarrinho } from '../../types/carrinho';
import { CheckboxModule } from 'primeng/checkbox';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ProdutoService } from '../../services/produto/produto.service';
import { Product } from '../../types/product';
import { SourceTextModule } from 'vm';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CardModule, ButtonModule,
    MenubarUsuarioComponent,
    FormsModule,
    CommonModule,
    ProdutosCarrinhoComponent,
    DividerModule,
    DataViewModule,
    TableModule,
    TagModule,
    CheckboxModule,
    InputTextModule, FloatLabelModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit{
  cep : string = '';
  checked: boolean = false;

  itensCarrinho: ItensCarrinho[] =  [];

  carrinho : Carrinho = {
    itens : [],
    id_carrinho : 0,
    status : ''

  }



  constructor( private productService : ProdutoService, private cartService : CartService, private router: Router) {
  }


  ngOnInit(): void {
    this.cartService.pegarItensCarrinho().subscribe(
      (data: Carrinho) => {
        this.itensCarrinho = data.itens;
        this.carrinho = data
      },
      (error: any) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  finalizarCarrinho(){
    console.log("CART COMP",this.carrinho )
    this.router.navigate(['/usuario/endereco'], { state: { data: this.carrinho } });
  }

  freteCalculado = false;
  cep2 = '';

  calcularFrete() {
    this.freteCalculado = true;
  }

  aumentarQuantidade(item : ItensCarrinho){
    const produto  = this.productService.pegarProdutoIdItemCarrinho(item.id)
    produto.subscribe(
      (data : Product) =>{
        console.log(data)
        if(item.quantidade < data.quantidade){
          item.quantidade +=1
          this.cartService.aumentarQuantidade(item)
      }else{
        alert("Quantidade indisponível")
      }
    }
    )
    
  }
  diminuirQuantidade(item : ItensCarrinho){
    item.quantidade -=1
    this.cartService.diminuirQuantidade(item)
  }

  formatCep() {
    this.cep = this.cep.replace(/\D/g, '').slice(0, 8);
    if (this.cep.length > 5) {
      this.cep = this.cep.slice(0, 5) + '-' + this.cep.slice(5);
    }
  }
}
