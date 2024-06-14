import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../../component/menubar/menubar.component';
import { ProdutoService } from '../../services/produto/produto.service';
import { Router } from 'express';
import { MessageService } from 'primeng/api';

import { LoginUsuario } from '../../types/login';
import { LoginService } from '../../services/login/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    MenubarComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
  logar() {
    const login: LoginUsuario = {
      email: this.email,
      senha: this.senha,
    };

    this.loginService.logar(login).subscribe(
      (response) => {
        console.log('Autenticado!', response);
      },
      (error) => {
        console.error('Erro ao Logar:', error);
      }
    );
  }
}
