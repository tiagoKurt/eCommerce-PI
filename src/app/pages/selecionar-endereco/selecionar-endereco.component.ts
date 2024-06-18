import { Component } from '@angular/core';
import { MenubarUsuarioComponent } from '../../component/menubar-usuario/menubar-usuario.component';
import { Endereco } from '../../types/endereco';
import { EnderecoService } from '../../services/endereco/endereco.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-endereco',
  standalone: true,
  imports: [MenubarUsuarioComponent, CardModule, ButtonModule],
  templateUrl: './selecionar-endereco.component.html',
  styleUrl: './selecionar-endereco.component.scss'
})
export class SelecionarEnderecoComponent {
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService, private router  : Router) {}

  ngOnInit(): void {
    this.enderecoService.pegarEnderecosUsuario().subscribe(
      (data: Endereco[]) => {
        this.enderecos = data;
      },
      (error: any) => {
        console.error('Erro ao buscar endereços:', error);
      }
    );
  }

  irParaCadastroEndereco(){
    this.router.navigate(['/cadastro/endereco'])
  }

  voltarCarrinho(){
    this.router.navigate(['/carrinho'])
  }

  irParaResumo(){
    this.router.navigate(['/finalizarPedido'])
  }
}
