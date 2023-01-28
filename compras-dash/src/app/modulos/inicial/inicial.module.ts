import { CadastrarComponent } from './../../views/cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { InicialRoutingModule } from './inicial-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


// ------------------------
import { FooterComponent } from 'src/app/components/templates/footer/footer.component';
import { NovaCompraFormComponent } from 'src/app/components/templates/nova-compra-form/nova-compra-form.component';
import { MainComponent } from 'src/app/components/templates/main/main.component';
import { InicialComponent } from './inicial.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { RelatoriosComponent } from './../../views/relatorios/relatorios.component';
import { MinhasComprasComponent } from 'src/app/views/minhas-compras/minhas-compras.component';


@NgModule({
  declarations: [
    InicialComponent,
    HomeComponent,
    MainComponent,
    CadastrarComponent,
    CardComponent,
    FooterComponent,
    NovaCompraFormComponent,
    RelatoriosComponent,
    MinhasComprasComponent



  ],
  imports: [
    CommonModule,
    InicialRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule

  ],
  exports: [
    MainComponent,
  ]
})
export class InicialModule { }
