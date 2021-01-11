import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  componentes: Componente[] = [
    {
      icon: 'albums-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];

  constructor( private menuCtrl: MenuController  ) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

}
