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
import {} from '@angular/common/http';
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

  constructor(private produtoService: ProdutoService, private messageService : MessageService) {}

  ngOnInit(): void {}

  salvarProduto() {
    if (!this.nome || !this.descricao || !this.preco || !this.quantidade || !this.tipoProduto || !this.imagem) {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Por favor, preencha todos os campos.' });
      return;
    }

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
        this.showSuccess();
        this.limparCampos();
      },
      (error) => {

      }
    );
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Produto foi cadastrado com sucesso!' });
}


limparCampos() {
  this.nome = '';
  this.descricao = '';
  this.preco = '';
  this.quantidade = '';
  this.tipoProduto = '';
  this.imagem = '';
}

validateNameInput(event: KeyboardEvent) {
  const inputChar = String.fromCharCode(event.charCode);
  if (!/^[a-zA-Z ]*$/.test(inputChar)) {
    event.preventDefault();
  }
}
}
