import { Component, OnInit } from '@angular/core';
import {usersService} from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers:[
    usersService
  ]
})
export class UsersComponent implements OnInit {
  usersCompData:{name:string,status:string,count:number}[];
  usersCompDataActive:{name:string,status:string,count:number}[];
  usersCompDataInactive:{name:string,status:string,count:number}[];

constructor(private Uservice:usersService){
this.usersCompData=Uservice.users;
console.log("hi from construct");

this.SetArrays();
this.Uservice.UpdateArrs.subscribe(() => {
  this.SetArrays();
});
}
ngOnInit() {
  console.log('Users in UsersComponent:', this.usersCompData);

 
}

SetArrays(){
  this.usersCompDataActive=[];
  this.usersCompDataInactive=[];
  this.usersCompData.forEach(element => {
    if(element.status=="Active"){
      this.usersCompDataActive.push(element);
    }
    else{
      this.usersCompDataInactive.push(element);
    }
  });
  console.log('Users in Active:', this.usersCompDataActive);
  console.log('Users in Inctive:', this.usersCompDataInactive);

}
}
