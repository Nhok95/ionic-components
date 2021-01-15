import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces'
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService,
               private menuCtrl: MenuController  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();  
  }

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

}
