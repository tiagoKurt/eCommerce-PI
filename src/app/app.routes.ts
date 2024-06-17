import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ProductComponent } from './admin/product/product.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexUsuarioComponent } from './pages/index-usuario/index-usuario.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { EnderecoComponent } from './user/endereco/endereco.component';
import { CartComponent } from './user/cart/cart.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ListaPedidosComponent } from './component/lista-pedidos/lista-pedidos.component';

export const routes: Routes = [
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'cadastro/produto', component: ProductComponent },
  { path: 'cadastro/usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro/endereco', component: EnderecoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: IndexUsuarioComponent },
  { path: 'gestor/pedidos', component: ListaPedidosComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'gestor', component: ProductListComponent },
  { path: 'gestor/produtos', component: ProductListComponent },
  { path: 'usuario/pedidos', component: PedidosComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
