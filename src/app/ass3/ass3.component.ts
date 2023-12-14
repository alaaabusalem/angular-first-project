import { Component } from "@angular/core";

@Component({
    selector:'app-ass3',
    templateUrl:'./ass3.component.html',
    styleUrl:'./ass3.component.css'
})


export class Ass3Component{
    showPara=false;
    arr=[];

    ClickedFun(){
      this.showPara= !this.showPara;
       this.arr.push(new Date());
       console.log(this.arr.length)
    }
}