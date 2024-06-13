import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../../component/menubar/menubar.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ProdutoService } from '../../services/produto/produto.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    MenubarComponent,
    FileUploadModule,
    CommonModule,
    ToastModule,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MessageService],
})
export class ProductComponent {
  nome: string = '';
  descricao: string = '';
  preco: string = '';
  quantidade: string = '';
  tipoProduto: string = '';
  imagem: string = '';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {}

  salvarProduto() {
    const produto: Product = {
      nome: this.nome,
      descricao: this.descricao,
      preco: Number(this.preco),
      quantidade: Number(this.quantidade),
      tipoProduto: this.tipoProduto,
      foto: this.imagem,
    };

    this.produtoService.salvar(produto).subscribe(
      (response) => {
        console.log('Produto cadastrado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao cadastrar produto:', error);
      }
    );
  }
}
