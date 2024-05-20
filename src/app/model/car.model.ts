export class Car {
    id: number;
    model: string;
    price: number;
    category_id: number;
    status:number;
    createdAt:Date;
    updatedAt:Date;
    number_plate:string;
    constructor() {
        // Khởi tạo các thuộc tính mặc định
        this.id = 0;
        this.model = '';
        this.price = 0;
        this.category_id = 0;
        this.status = 0;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.number_plate = '';
      }
    
  }
  