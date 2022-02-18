import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../crud.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  title = 'users-app';
  paniers: any = [];
  constructor(public crudService: CrudService) { }
  ngOnInit() {
    this.fetchPaniers()
  }  
  fetchPaniers() {
    return this.crudService.getPaniers().subscribe((data: {}) => {
      this.paniers = data;
    })    
  }
  remove(id: string) {
    this.crudService.delete(id).subscribe(res => {
      this.fetchPaniers()
    })
  }

  
}

