import { Component ,Output, EventEmitter} from '@angular/core';
import { Car } from 'src/app/model/car.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const url = 'http://localhost:3000/api/admin/createCar'
@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})

export class CreateCarComponent {
  car: Car = new Car(); // Khởi tạo đối tượng Car mới
  constructor(private http: HttpClient) { }
  @Output() carSubmitted = new EventEmitter<Car>();
  body:any;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Đặt headers cho request
  onSubmit() {
    // Gửi sự kiện carSubmitted với đối tượng car khi người dùng nhấn nút Submit
    this.carSubmitted.emit(this.car);
    this.body = JSON.stringify(this.car)
    this.http.post(url, this.body, { headers: this.headers })
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