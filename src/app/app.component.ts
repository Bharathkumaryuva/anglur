import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { FormGroup,FormControl } from '@angular/forms';
FormGroup
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //string interpolation
 /*name:string="Bharath";
 age:number=25;
 villege(){
  return'Ramapuram'
 }

 //property binding
 isDisabled:boolean=false
 names:string="Yuva"
 name1:string="Enter Name"
 
 //Event binding
 changes(){
  this.name1="Name Entered"
 }

 change(){
  this.names="Bharath"
 }

 //name:string=""

 //Two way data binding
 name:string=""
 text:string="No name is Entered"

 change(){
  this.text="your name is " +this.name
 }

 //Pipes
 named:string="BharathE"
 day=Date()

 //json,chain pipes
user={
  Name:'BharathEsu',
  age:20,
  Location:'Ramapuram'
}
money=10

name:string='Bharath'

user=[
  {name:"Bharath",email:"bharath@gmail.com"},
  {name:"Dhina",email:"dhina@gmail.com"},
  {name:"Udhaya",email:"udhaya@gmail.com"},
  {name:"Guna",email:"guna@gmail.com"}
]

named!:string
age!:string
receive(data:any){
  this.named=data.named
  this.age=data.age
}*/

/*data:any
datas:any*/

/* constructor(private user:UserService){

 console.warn(user.userdata())
   this.data=user.userdata()
}*/

/*constructor(private product:UserService){
  console.warn(product.productdata())
  this.datas=product.productdata()
}*/

title="Angular Forms"

/*country:any=[
  {id:1 , name:'india'},
  {id:2 , name:'usa'},
  {id:3 , name:'canada'},
  {id:4 , name:'china'}
]

OnSubmit(data:any){
  console.log(data.value)
}*/


}


