import { Component,Input } from '@angular/core';
import {usersService} from '../../services/users.service'

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.css'
})
export class InactiveComponent {
  @Input() user:{name:string,status:string,count:number}

  constructor(private Uservice:usersService){}
  Change(){
    this.Uservice.ChangeStatus(this.user.name);
    this.Uservice.UpdateArrs.emit();

  }
}
