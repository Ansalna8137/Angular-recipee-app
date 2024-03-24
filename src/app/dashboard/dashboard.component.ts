import { Component,OnInit } from '@angular/core';
import {ServicesService} from '../service/services.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  recipes: any[] = [];

  constructor(private api: ServicesService) {
    this.fetchData();
   }


  fetchData() {
    this.api.fetchData().subscribe(
      {
        next: (res: any) => {
          this.recipes = res.recipes;
        },
      }
    );
  }  
}
