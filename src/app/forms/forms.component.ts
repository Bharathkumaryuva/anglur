import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  loginForm=new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  })
  
  onsubmit(){
    console.log(this.loginForm)
  }
  

}
