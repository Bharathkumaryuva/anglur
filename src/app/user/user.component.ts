import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
 // @Input() item:any={name:"",email:""}

 @Output() neweve=new EventEmitter <string>();

 send(){
  let data:any={named:"Bharath",age:"25"}
  this.neweve.emit(data)
}

}

