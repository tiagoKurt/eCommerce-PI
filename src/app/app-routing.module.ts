import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'adm', loadChildren: () => AdminModule },
  { path: 'user', loadChildren: () => UserModule },
  { path: '**', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
