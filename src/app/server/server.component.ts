import { Component } from "@angular/core";

@Component({
selector: 'app-server',
templateUrl:'./server.component.html',
styles:[

 `
 .isabled{

    cursor: not-allowed;
 }
 `   
]
})
export class ServerComponent{
IsTrue=true;
allowClick="hi";
constructor(){
   /* setTimeout(()=>
    {
        this.allowClick=true;
    },3000);*/
}
EventBinding(event : Event){
    this.allowClick=(<HTMLInputElement>event.target).value;
}
checkIsTrue(){
return false;

}
}