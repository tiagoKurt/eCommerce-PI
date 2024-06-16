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

export const routes: Routes = [
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'cadastro/produto', component: ProductComponent },
  { path: 'cadastro/usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro/endereco', component: EnderecoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: IndexUsuarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'gestor', component: ProductListComponent },
  { path: 'produtos', component: ProductListComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
