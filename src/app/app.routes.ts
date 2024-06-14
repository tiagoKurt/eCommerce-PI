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

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'cadastro/produto', component: ProductComponent },
  { path: 'cadastro/usuario', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuario', component: IndexUsuarioComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'cadastro/endereco', component: EnderecoComponent},
 
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  
];
