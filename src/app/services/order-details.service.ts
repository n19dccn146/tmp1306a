import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  
  foodDetails=[
    {
      id:1,
      foodName:"Spicy Garlic Shrimp Pizza",
      foodDetails:"Garlic-infused shrimp atop an Arrabbiata tomato sauce base",
      foodPrice:"349,000đ",
      foodImg:"../../../assets/pizza1.webp"
    },
    {
      id:2,
      foodName:"Burrata Parma Ham Margherita Pizza",
      foodDetails:"Tomato base pizza topped with Burrata Cheese & Italian Parma Ham",
      foodPrice:"349,000đ",
      foodImg:"../../../assets/pizza2.webp"
    },
    {
      id:3,
      foodName:"Milano Salami & Chorizo Margherita Pizza",
      foodDetails:"Italian Salami and Dalat Chorizo topped on Tomato base pizza",
      foodPrice:"349,000đ",
      foodImg:"../../../assets/pizza3.webp"
    },
    {
      id:4,
      foodName:"Eggplant Pizza",
      foodDetails:"Baked eggplant marinated in balsamic with basil on a Margherita base, offering sour flavor and sweet aftertaste.",
      foodPrice:"349,000đ",
      foodImg:"../../../assets/pizza4.webp"
    },
    {
      id:5,
      foodName:"Kale with House-made Lemon Ricotta with Olive and Caper sauce Pizza",
      foodDetails:"Vegetarian",
      foodPrice:"349,000đ",
      foodImg:"../../../assets/pizza5.webp"
    },
    {
      id:6,
      foodName:"Teriyaki Chicken Pizza",
      foodDetails:"Sweet Soy sauce taste Chicken with Seaweed, Perilla and Mayonnaise",
      foodPrice:"349,000đ",
      foodImg:"../../../assets/pizza6.webp"
    },
    
  ]
}
