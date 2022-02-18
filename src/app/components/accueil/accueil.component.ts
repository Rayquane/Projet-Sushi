import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../crud.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  title = 'users-app';
  menus: any = [];
  constructor(public crudService: CrudService) { }
  ngOnInit() {
    this.fetchMenus()
  }  
  fetchMenus() {
    return this.crudService.getMenus().subscribe((data: {}) => {
      this.menus = data;
    })    
  }
  remove(id: string) {
    this.crudService.delete(id).subscribe(res => {
      this.fetchMenus()
    })
  }
}


