import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../../component/menubar/menubar.component';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginUsuario } from '../../types/login';
import { LoginService } from '../../services/login/login.service';
import { LoginResponse } from '../../types/loginResponse';
import { CookieService } from 'ngx-cookie-service';

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
  providers: [MessageService]
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  tipoUsuario: string = '';
  constructor(private loginService: LoginService, private router: Router, private messageService: MessageService, private cookie : CookieService) { }

  ngOnInit(): void { }

  logar() {
    const login: LoginUsuario = {
      email: this.email,
      senha: this.senha,
      tipoUsuario: this.tipoUsuario
    };

    this.loginService.logar(login).subscribe(
      (response: LoginResponse) => {
        console.log('Autenticado!', response);
        if (response.usuario.tipoUsuario === 'GESTOR') {
          this.router.navigate(['/gestor']);

        } else if (response.usuario.tipoUsuario=== 'CLIENTE') {
          this.router.navigate(['/usuario']);
        }
        this.cookie.set('SESSION_TOKEN', response.session.id);
      },
      (error) => {
        console.error('Erro ao Logar:', error);
        this.showError();
      }
    );
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }
}
