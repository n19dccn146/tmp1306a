import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
 
 constructor(private param:ActivatedRoute, private service:OrderDetailsService){}
 getMenuId:any;
 menuData:any;
 dumamay:any;
 ngOnInit(): void {
    this.dumamay = 1
     this.getMenuId = this.param.snapshot.paramMap.get('id');
     console.log(this.getMenuId," get menu");
     if(this.getMenuId){
        this.menuData = this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        })
      
     }
 }

 changeQuantity(duma : boolean){
  if(! duma && this.dumamay <= 1 )
      return
  if(duma)
    ++this.dumamay
  else
    --this.dumamay
 }

  
}
