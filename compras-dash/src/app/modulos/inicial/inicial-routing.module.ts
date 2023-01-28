import { CadastrarComponent } from './../../views/cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from 'src/app/views/home/home.component';
import { RelatoriosComponent } from 'src/app/views/relatorios/relatorios.component';
import { MinhasComprasComponent } from 'src/app/views/minhas-compras/minhas-compras.component';
import { UsuariosComponent } from 'src/app/views/usuarios/usuarios.component';
import { LojasComponent } from 'src/app/views/lojas/lojas.component';
import { ProdutosComponent } from 'src/app/views/produtos/produtos.component';
import { MensagensComponent } from 'src/app/views/mensagens/mensagens.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarComponent},
  { path: 'relatorios', component: RelatoriosComponent},
  { path: 'minhas-compras', component: MinhasComprasComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'lojas', component: LojasComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'mensagens', component: MensagensComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicialRoutingModule { }
