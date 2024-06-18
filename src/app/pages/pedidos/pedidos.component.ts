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
import { ListaCardsProdutosService } from '../../services/lista-cards-produtos/lista-cards-produtos.service';
import { Product } from '../../types/product';
import { TableModule } from 'primeng/table';
import { CookieService } from 'ngx-cookie-service';
import { PedidoService } from '../../services/pedido/pedido.service';
import { Pedido } from '../../types/pedido';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pedidos',
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
    ButtonModule,
    CardModule,
    TableModule,
    MenubarUsuarioComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.scss'
})
export class PedidosComponent {
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService,  private cookie : CookieService, private router : Router) {
  }
    
  ngOnInit(): void {
    const session = this.cookie.get("SESSION_TOKEN")
    this.pedidoService.pegarPedidosUser(session).subscribe(
      (data : Pedido[]) =>{
        this.pedidos = data
      }
    )
  }
  
}
