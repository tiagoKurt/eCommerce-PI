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
    MenubarUsuarioComponent
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
  id_usuario : number = 0
  id : number = 0
  constructor(private enderecoService: EnderecoService, private router: Router) {}

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


  salvarEndereco() {
    const endereco: Endereco = {
      id : this.id,
      cep : this.cep,
      rua: this.rua,
      cidade: this.cidade, 
      uf: this.uf, 
      numero: this.numero, 
      complemento:this.complemento ,
      bairro : this.bairro,
      id_usuario : this.id_usuario
    };

    this.enderecoService.salvar(endereco).subscribe(
      (response) => {
        console.log('Endereco cadastrado com sucesso!', response);
        this.router.navigate(['/cadastro/endereco'])
        
      },
      (error) => {
        console.error('Erro ao cadastrar endereco:', error);
      }
    );
  }

  
}
