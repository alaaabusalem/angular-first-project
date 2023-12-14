import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-ass6',
  templateUrl: './ass6.component.html',
  styleUrl: './ass6.component.css'
})
export class Ass6Component {
@ViewChild('form') formObj: NgForm;
selectVal="Pro";
isSubmitted=false;
user={
  email:'',
  password:'',
  subscribtion:''
};
constructor(){
  console.log(this.user);
}
onSubmit(){
  console.log(this.formObj);
  this.isSubmitted=true;
  this.user.email=this.formObj.value.Email;
  this.user.password=this.formObj.value.Password;
  this.user.subscribtion=this.formObj.value.Sub;

}
}
