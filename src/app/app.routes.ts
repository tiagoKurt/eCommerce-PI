import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ProductComponent } from './admin/product/product.component';

export const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'adm', loadChildren: () => AdminModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: 'cadastroProduto', component: ProductComponent },
  { path: '**', redirectTo: '/index', pathMatch: 'full' },
];
