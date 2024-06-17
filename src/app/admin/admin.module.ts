import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {} from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
