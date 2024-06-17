import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { CommonModule } from '@angular/common';
import { ProdutosCarrinhoComponent } from '../../component/produtos-carrinho/produtos-carrinho.component';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CardModule, ButtonModule,
    MenubarUsuarioComponent,
    FormsModule,
    CommonModule,
    ProdutosCarrinhoComponent,
    DividerModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {

  freteCalculado = false;
  cep: string = '';

  calcularFrete() {
    this.freteCalculado = true;
  }

  formatCep() {
    this.cep = this.cep.replace(/\D/g, '').slice(0, 8);
    if (this.cep.length > 5) {
      this.cep = this.cep.slice(0, 5) + '-' + this.cep.slice(5);
    }
  }
}
