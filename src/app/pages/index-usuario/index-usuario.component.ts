import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuItem, MessageService } from 'primeng/api';
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
import { CarrosselListaProdutosComponent } from '../../component/carrossel-lista-produtos/carrossel-lista-produtos.component';

@Component({
  selector: 'app-index-usuario',
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
    CarrosselListaProdutosComponent,
    CarouselModule, ButtonModule, TagModule],
  templateUrl: './index-usuario.component.html',
  styleUrl: './index-usuario.component.scss',
  providers: [ProdutoService]
})
export class IndexUsuarioComponent {
  
}
