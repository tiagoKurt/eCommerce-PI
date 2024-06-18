import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { EnderecoService } from '../../services/endereco/endereco.service';
import { Endereco } from '../../types/endereco';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InputMaskModule } from 'primeng/inputmask';
import { Carrinho } from '../../types/carrinho';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    FileUploadModule,
    CommonModule,
    ToastModule,
    MenubarUsuarioComponent,
    InputMaskModule
  ],
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
  providers: [MessageService],
})
export class EnderecoComponent {
  cep: string = '';
  rua: string = '';
  cidade: string = ''; 
  uf: string = ''; 
  numero: string = ''; 
  complemento: string = '';
  bairro : string = ''; 
  session_token : string = '';
  id : number = 0

  carrinho : Carrinho = {
    itens : [],
    id_carrinho: 0,
    status: ''
  }
  constructor(private enderecoService: EnderecoService, private router: Router, private cookie : CookieService, private messageService : MessageService) {
    const navigation = this.router.getCurrentNavigation();
    this.carrinho = navigation?.extras?.state?.['dataCarrinho']
  }

  ngOnInit(): void {}

  pegarCep(){
    this.enderecoService.pegarCep(this.cep).subscribe(
      (response ) => {
        this.rua = response.rua;
        this.cidade = response.cidade;
        this.uf = response.uf;
        this.bairro = response.bairro;
        this.complemento = response.complemento;
        this.numero = response.numero;
      },
      (error) => {
        console.error('Erro ao buscar CEP:', error);
      }
    );
  }

  voltarEndereco(){
    console.log(this.carrinho)
    this.router.navigate(['/usuario/endereco'], { state: { data: this.carrinho } });
  }

  salvarEndereco() {
    if (!this.cep || !this.rua || !this.cidade || !this.uf || !this.numero || !this.bairro) {
      this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Todos os campos devem ser preenchidos!' });
      return;
    }

    const endereco: Endereco = {
      id: this.id,
      cep: this.cep,
      rua: this.rua,
      cidade: this.cidade, 
      uf: this.uf, 
      numero: this.numero, 
      complemento: this.complemento,
      bairro: this.bairro,
      session_token: this.cookie.get('SESSION_TOKEN'),
    };

    this.enderecoService.salvar(endereco).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Endereço foi cadastrado com sucesso!' });
        setTimeout(() => {
          this.router.navigate(['/usuario/endereco']);
        }, 1500);
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Endereço não foi cadastrado!' });
      }
    );
  }

  
}
