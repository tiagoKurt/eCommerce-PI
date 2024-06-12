import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../../component/menubar/menubar.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { CadastroUsuario } from '../../types/cadastro-usuarios';
import { CadastrarUsuarioService } from '../../services/cadastrar-usuario/cadastrar-usuario.service';


@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    MenubarComponent,
  InputMaskModule,
  DropdownModule
],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = '';
  tipoUsuario: string = 'USUARIO';
  senha: string = '';
  confirmarSenha: string = '';
  value: string='';

  
  constructor(private cadastroUsuarioService: CadastrarUsuarioService) {}
  
  
  ngOnInit(): void {}

  
  salvarUsuario() {
    const usuario : CadastroUsuario= {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      telefone: this.telefone,
      tipoUsuario: this.tipoUsuario,
      senha: this.senha
    }
    

    this.cadastroUsuarioService.logar(usuario).subscribe(
      (response) => {
        console.log('Usuario Criado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao Criar Usuario:', error);
      }
    );
    
  }



}
