import { Ass3Component } from './ass3/ass3.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Ass6Component } from './ass6/ass6.component'
import { Ass7Component } from './ass7/ass7.component'

const appRoutes: Routes=[
    {path: 'ass3', component:Ass3Component},
    {path: 'ass4', component:GamecontrolComponent},
    {path: 'ass5', component:UsersComponent},
    {path: 'ass6', component:Ass6Component},
    {path: 'ass7', component:Ass7Component},

    ];

    @NgModule({
        imports: [
        
            RouterModule.forRoot(appRoutes)
          ],
exports:[RouterModule]
    })

    export class AppRouting { }
