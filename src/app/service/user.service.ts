import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user=[
    {name:"Bharath",email:"bharath@gmail.com"},
    {name:"Dhina",email:"dhina@gmail.com"},
    {name:"Udhaya",email:"udhaya@gmail.com"},
    {name:"Guna",email:"guna@gmail.com"}
  ]

  userdata(){
    return this.user
  }

  product=[{ 
    id: 1,
    name: "Wireless Earbuds",
    description: "Experience crystal clear sound with our high-quality wireless earbuds. Perfect for music lovers on-the-go.",
    price: 99.99,
    image: "https://example.com/wireless-earbuds.jpg"
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Stay connected and track your fitness with our stylish and functional smartwatch. Features include heart rate monitoring, sleep tracking, and more.",
    price: 149.99,}]
 
  productdata(){
    return this.product
  }
  constructor() { }
}
