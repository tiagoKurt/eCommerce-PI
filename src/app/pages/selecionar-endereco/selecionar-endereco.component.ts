import { Component } from '@angular/core';
import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { Endereco } from '../../types/endereco';
import { EnderecoService } from '../../services/endereco/endereco.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResumoPedidoComponent } from '../resumo-pedido/resumo-pedido.component';
import { Carrinho } from '../../types/carrinho';

@Component({
  selector: 'app-selecionar-endereco',
  standalone: true,
  imports: [MenubarUsuarioComponent, CardModule, ButtonModule],
  templateUrl: './selecionar-endereco.component.html',
  styleUrl: './selecionar-endereco.component.scss'
})
export class SelecionarEnderecoComponent {
  enderecos: Endereco[] = [];
  carrinho : Carrinho ={
    id_carrinho: 0,
    itens: [],
    status: ''
  }
  
  constructor(private enderecoService: EnderecoService, private router  : Router, private cookie : CookieService) {
    const navigation = this.router.getCurrentNavigation();
    this.carrinho = navigation?.extras?.state?.['data']
  }
  
  ngOnInit(): void {
    const session = this.cookie.get("SESSION_TOKEN")
      console.log(this.carrinho)
      this.enderecoService.pegarEnderecosUsuario(session).subscribe(
        (data) =>{
          this.enderecos = data
          console.log(data)
        }
      ) 
  }


  irParaCadastroEndereco(){
    this.router.navigate(['/cadastro/endereco'], {state : {dataCarrinho : this.carrinho} })
  }

  voltarCarrinho(){
    this.router.navigate(['/carrinho'])
  }

  irParaResumo(enderecos : Endereco){
    console.log("CARRINHO SELECIONAR", this.carrinho)
    this.router.navigate(['/usuario/finalizar'], { state: { data: enderecos , dataCarrinho : this.carrinho} });
  }
}
