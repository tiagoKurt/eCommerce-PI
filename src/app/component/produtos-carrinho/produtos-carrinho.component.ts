import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { CardsProdutosComponent } from '../../component/cards-produtos/cards-produtos.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProdutoService } from '../../services/produto/produto.service';
import { Product } from '../../types/product';
import { ListaCardsProdutosService } from '../../services/lista-cards-produtos/lista-cards-produtos.service';

@Component({
  selector: 'app-produtos-carrinho',
  standalone: true,
  imports: [FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    CardModule,
    ButtonModule,
    CardsProdutosComponent,
    MenubarUsuarioComponent,
    CarouselModule, ButtonModule, TagModule],
  templateUrl: './produtos-carrinho.component.html',
  styleUrls: ['./produtos-carrinho.component.scss'],
  providers: [ProdutoService],
})
export class ProdutosCarrinhoComponent implements OnInit {

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
