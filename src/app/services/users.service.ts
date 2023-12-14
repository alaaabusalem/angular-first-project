import { EventEmitter } from "@angular/core";

export class usersService{
 public users=[
    { name: "Alaa", status: "Active", count: 0 },
    { name: "Kady", status: "Inactive", count: 0 },
    { name: "Sarah", status: "Active", count: 0 },
    { name: "Omar", status: "Inactive", count: 0 },
    { name: "Ahmad", status: "Inactive", count: 0 }
]; 

   ChangeStatus(name:string){
    console.log("ChangeStatus method")
    const index = this.users.findIndex(o => o.name == name);
    console.log(index);

    if( this.users[index].status=="Active"){
        this.users[index].status="Inactive"
    }
    else{
        this.users[index].status="Active"
    }
    this.users[index].count++;
    console.log(`user ${name} status change`);
   }

   UpdateArrs= new EventEmitter<void>();
}