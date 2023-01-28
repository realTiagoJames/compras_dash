import { Component, } from '@angular/core';








@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  itemsCadastro = [
    {
      title: 'Nova Compra',
      icon: 'group',
      url: 'cadastrar',
      foto: 'https://ssxdigital.com.br/wp-content/uploads/2020/03/compra-online-1024x684.jpg',
    },
    {
      title: 'Minhas Compras',
      icon: 'usb',
      url: 'minhas-compras',
      foto: 'https://www.contabexpress.com.br/wp-content/uploads/2022/10/finance-accounting-paper-desk-using-768x512.jpg.webp',
    },
    {
      title: '',
      icon: 'usb',
      url: 'mensagens',
      foto: 'https://blog.mentores.com.br/wp-content/uploads/2016/11/ssssssssss.gif',
    },
    {
      title: 'Usuários',
      icon: 'usb',
      url: 'usuarios',
      foto: 'https://blog.dataprius.com/wp-content/uploads/2019/08/enviar-documentos-por-la-red.jpg',
    },
    {
      title: 'Relatórios',
      icon: 'usb',
      url: 'relatorios',
      foto: 'https://static.portugues.com.br/2020/01/relatorio.jpg',
    },
  ];


}

