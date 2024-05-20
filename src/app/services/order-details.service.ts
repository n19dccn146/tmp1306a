import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  
  foodDetails=[
    {
      id:1,
      foodName:"Pizza",
      foodDetails:"Seafood Pizza",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80"
    },
    {
      id:2,
      foodName:"Fried Noodles",
      foodDetails:"Fried noodles with vegetables",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id:3,
      foodName:"Sandwich",
      foodDetails:"Fruit Sandwich",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80"
    },
    {
      id:4,
      foodName:"Humburger",
      foodDetails:"Chicken hamburger",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
    },
    {
      id:5,
      foodName:"Beefsteak",
      foodDetails:"Beefsteak with celery",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
    },
    {
      id:6,
      foodName:"Pho",
      foodDetails:"Vietnamese Pho is the best food in the world",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1631709497146-a239ef373cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    
  ]
}
