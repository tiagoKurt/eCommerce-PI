import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cards-produtos',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './cards-produtos.component.html',
  styleUrl: './cards-produtos.component.scss',
})
export class CardsProdutosComponent {}
