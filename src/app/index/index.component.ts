import { Component, OnInit } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarComponent } from '../component/menubar/menubar.component';
import { CardModule } from 'primeng/card';
import { CardsProdutosComponent } from '../component/cards-produtos/cards-produtos.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    MenubarComponent,
    CardModule,
    ButtonModule,
    CardsProdutosComponent,
  ],
  providers: [MessageService],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {}
