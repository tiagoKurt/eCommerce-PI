import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ProductComponent } from './app/admin/product/product.component';
import { Routes } from '@angular/router';

bootstrapApplication(ProductComponent, appConfig).catch((err) =>
  console.error(err)
);
