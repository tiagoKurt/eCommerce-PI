import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { CardsProdutosComponent } from '../../component/cards-produtos/cards-produtos.component';

@Component({
  selector: 'app-index-usuario',
  standalone: true,
  imports: [FormsModule,
    InputTextModule,
    FloatLabelModule,
    MenubarModule,
    ToastModule,
    ButtonModule,
    CardModule,
    ButtonModule,
    CardsProdutosComponent,
    MenubarUsuarioComponent],
  templateUrl: './index-usuario.component.html',
  styleUrl: './index-usuario.component.scss'
})
export class IndexUsuarioComponent {

}
