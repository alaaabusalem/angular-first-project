import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-gameevent',
  templateUrl: './gameevent.component.html',
  styleUrl: './gameevent.component.css'
})
export class GameeventComponent {
  private intervalId: any;
 @Input() startGameChild:boolean;
 @Output() incrementEvent= new EventEmitter<number>();
 increment:number=0;
   CallSetTimeout(){
    this.intervalId =setInterval(() => {
     this.incrementEvent.emit(++this.increment);
     }, 1000);
  }
EndSetTimeout(){
  if (this.intervalId) {
    clearInterval(this.intervalId);
  }
}
}
