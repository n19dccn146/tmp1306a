import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
OrderDetailsService


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private service:OrderDetailsService){}
  foodData:any;
  ngOnInit(){
    this.foodData =this.service.foodDetails;
  }
}
