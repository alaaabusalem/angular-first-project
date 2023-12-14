import { Component } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrl: './gamecontrol.component.css'
})
export class GamecontrolComponent {
  startGame=false;
numbers:number[]=[];

pushNumber(num:number){
this.numbers.push(num);
console.log(num);
}
}
