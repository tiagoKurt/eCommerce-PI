import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../../component/menubar/menubar.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CadastroUsuario } from '../../types/cadastro-usuarios';
import { CadastrarUsuarioService } from '../../services/cadastrar-usuario/cadastrar-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [
    CommonModule,  // Use CommonModule aqui
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    MenubarComponent,
    InputMaskModule,
    DropdownModule,
  ],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss',
  providers: [MessageService]
})
export class CadastroUsuarioComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = '';
  tipoUsuario: string = 'CLIENTE';
  senha: string = '';
  confirmarSenha: string = '';
  value: string = '';

  constructor(
    private cadastroUsuarioService: CadastrarUsuarioService,
    private router: Router, 
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }

  salvarUsuario() {
    const usuario: CadastroUsuario = {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
      tipoUsuario: this.tipoUsuario,
      senha: this.senha,
    };

    this.cadastroUsuarioService.criarUsuario(usuario).subscribe(
      (response) => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Usuario foi cadastrado com sucesso!' });
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Erro ao Criar Usuario:', error);
      }
    );
  }

}
