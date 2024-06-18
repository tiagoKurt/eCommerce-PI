import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    RippleModule,
    ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
