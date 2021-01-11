import { Component, OnInit } from '@angular/core';
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

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    console.log(this.dataService.getMenuOpts());
    this.componentes = this.dataService.getMenuOpts();  
  }

}
