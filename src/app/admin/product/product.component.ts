import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../../component/menubar/menubar.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, MenubarModule, ToastModule, ButtonModule, MenubarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  value: any;

  // constructor(private produtoService: ProdutoService) {}

  // ngOnInit(): void {}

  // salvarProduto() {
  //   this.produtoService.salvar(this.value).subscribe((response) => {
  //     console.log('Produto cadastrado com sucesso!', response);
  //   }, (error) => {
  //     console.error('Erro ao cadastrar produto:', error);
  //   });
  // }
}
