import { Component } from '@angular/core';


export interface PeriodicElement {
  descricao: string;
  position: number;
  qtde: number;
  und: string;
  vlunt: number;
  vltotal: number

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  descricao: 'Hydrogen',   qtde: 1.0079, und: 'H'  , vlunt:10.96 , vltotal:105.80,},
  {position: 2,  descricao: 'Helium',     qtde: 4.0026, und: 'He' , vlunt:10.000, vltotal:105.80,},
  {position: 3,  descricao: 'Lithium',    qtde: 6.941, und: 'Li'  , vlunt:10.000, vltotal:105.80,},
  {position: 4,  descricao: 'Beryllium',  qtde: 9.0122, und: 'Be' , vlunt:10.000, vltotal:105.80,},
  {position: 5,  descricao: 'Boron',      qtde: 10.811, und: 'B'  , vlunt:10.000, vltotal:105.80,},
  {position: 6,  descricao: 'Carbon',     qtde: 12.0107, und: 'C' , vlunt:10.000, vltotal:105.80,},
  {position: 7,  descricao: 'Nitrogen',   qtde: 14.0067, und: 'N' , vlunt:10.000, vltotal:105.80,},
  {position: 8,  descricao: 'Oxygen',     qtde: 15.9994, und: 'O' , vlunt:10.000, vltotal:105.80,},
  {position: 9,  descricao: 'Fluorine',   qtde: 18.9984, und: 'F' , vlunt:10.000, vltotal:105.80,},
  {position: 10, descricao: 'Neon',       qtde: 20.1797, und: 'Ne', vlunt:10.000, vltotal:105.80,},
];


@Component({
  selector: 'app-nova-compra-form',
  templateUrl: './nova-compra-form.component.html',
  styleUrls: ['./nova-compra-form.component.css']
})
export class NovaCompraFormComponent {
  value = 'Clear me';
  totalem ='1350.00';

  displayedColumns = [
    'position',
    'descrição',
    'qtde',
    'und',
    'vlunt',
    'vltotal',
    'star',

  ];
  dataSource = ELEMENT_DATA;
}


