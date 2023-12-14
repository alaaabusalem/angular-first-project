import { Component,Input } from '@angular/core';
import {usersService} from '../../services/users.service'
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent {
  @Input() user:{name:string,status:string,count:number};
  constructor(private Uservice:usersService){
   
  }
  Change(){
    this.Uservice.ChangeStatus(this.user.name);
    this.Uservice.UpdateArrs.emit();
  }
  
}
