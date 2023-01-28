import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicial', loadChildren: () => import('./modulos/inicial/inicial.module').then(m => m.InicialModule)
  },
  {
    path: '',
    redirectTo: '/inicial',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
