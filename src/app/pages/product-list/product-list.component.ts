import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../model/car.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const Url = 'http://localhost:3000/api/admin/deleteCar/';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cars: Car[] = [];
  id:any;
  constructor(private http: HttpClient, private carService: CarService ) { }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.carService.getProducts()
      .subscribe(response => {
        this.cars = response.data;
      });
  }
  body:any;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Đặt headers cho request
  onDelete(carId:number) {
    // Gửi sự kiện carSubmitted với đối tượng car khi người dùng nhấn nút Submit
    this.body = JSON.stringify(this.id)
    console.log(this.id)
    this.http.delete(Url +carId)
    .subscribe(
    response => {
      console.log('Response:', response);
      // Xử lý response từ server
    },
    error => {
      console.error('Error:', error);
      // Xử lý lỗi
    }
  );
  }
}
