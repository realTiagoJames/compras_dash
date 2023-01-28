import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { LojasComponent } from './views/lojas/lojas.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { MensagensComponent } from './views/mensagens/mensagens.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LojasComponent,
    ProdutosComponent,
    MensagensComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
