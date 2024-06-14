import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
  ],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Conta',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Lista dos produtos',
            icon: PrimeIcons.BOOK,
            routerLink: '/pedidos',
          },
          {
            label: 'Lista dos pedidos',
            icon: 'pi pi-chart-bar',
            routerLink: '/pedidos',
          },
          {
            label: 'Sair',
            icon: PrimeIcons.SIGN_OUT,
             routerLink: '/login'
          },
        ],
      },
      {
        label: 'Página inicial',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Cadastro de Produtos',
        icon: PrimeIcons.PLUS,
        routerLink: '/cadastro/produto',
      },
    ];
  }

  logout() {
    // Lógica de logout
    console.log('Usuário saiu');
  }
}
