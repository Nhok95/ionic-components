import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[] = [];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbumes().suscribe( albumes => {
      console.log(albumes)
      this.albumes = albumes;
    })
  }

  onSearchChange( event: any ) {
    
  }

}