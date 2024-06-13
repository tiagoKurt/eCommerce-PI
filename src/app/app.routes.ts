import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ProductComponent } from './admin/product/product.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexUsuarioComponent } from './pages/index-usuario/index-usuario.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

export const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'adm', loadChildren: () => AdminModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'cadastroProduto', component: ProductComponent },
  { path: 'cadastroUsuario', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'indexUsuario', component: IndexUsuarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: '**', redirectTo: '/index', pathMatch: 'full' },
];
