import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule  } from '@angular/forms';
import { Ass3Component } from './ass3/ass3.component';
import { AppComponent } from './app.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './gamecontrol/odd/odd.component';
import { EventComponent } from './gamecontrol/event/event.component';
import { GameeventComponent } from './gamecontrol/gameevent/gameevent.component';
import { UsersComponent } from './users/users.component';
import { ActiveComponent } from './users/active/active.component';
import { InactiveComponent } from './users/inactive/inactive.component';
import{AppRouting} from './app.routing.module';
import { Ass6Component } from './ass6/ass6.component';
import { Ass7Component } from './ass7/ass7.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
@NgModule({
  declarations: [
    AppComponent,
    Ass3Component,
    GamecontrolComponent,
    OddComponent,
    EventComponent,
    GameeventComponent,
    UsersComponent,
    ActiveComponent,
    InactiveComponent,
    Ass6Component,
    Ass7Component,
    ReversePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
