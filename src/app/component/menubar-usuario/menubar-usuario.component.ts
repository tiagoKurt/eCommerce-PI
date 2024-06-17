import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-menubar-usuario',
  standalone: true,
  imports: [MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,],
  templateUrl: './menubar-usuario.component.html',
  styleUrl: './menubar-usuario.component.scss'
})
export class MenubarUsuarioComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Conta',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            routerLink: '/perfilUsuario',
          },
          {
            label: 'Pedidos',
            icon: PrimeIcons.BOOK,
            routerLink: '/usuario/pedidos',
          },
          {
            label: 'Sair',
            icon: PrimeIcons.SIGN_OUT,
            command: () => this.consoleClear(), 
            routerLink: '/login'

          },
        ],
      },
      {
        label: 'Página inicial',
        icon: 'pi pi-home',
        routerLink: '/usuario',
      },
      {
        label: 'Carrinho',
        icon: 'pi pi-shopping-cart',
        routerLink: '/carrinho',
      }
    ];
  }

  logout() {
    // Lógica de logout
    console.log('Usuário saiu');
  }
  consoleClear(){
    console.clear()
  }
}
