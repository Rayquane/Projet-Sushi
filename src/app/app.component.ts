import { Component, OnInit } from '@angular/core';
import { CrudService } from "./crud.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'users-app';
  Users: any = [];
  constructor(public crudService: CrudService) { }
  ngOnInit() {
    this.fetchMenus()
    this.fetchPaniers()
  }  
  fetchMenus() {
    return this.crudService.getMenus().subscribe((data: {}) => {
      this.Users = data;
    })    
  }
  



  fetchPaniers() {
    return this.crudService.getPaniers().subscribe((data: {}) => {
      this.Users = data;
    })    
  }
  remove(id: string) {
    this.crudService.delete(id).subscribe(res => {
      this.fetchPaniers()
    })
  }
}

