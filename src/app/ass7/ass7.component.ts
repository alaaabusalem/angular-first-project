import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ass7',
  templateUrl: './ass7.component.html',
  styleUrl: './ass7.component.css'
})
export class Ass7Component implements OnInit{
 myForm: FormGroup;
 status=['Stable','Critical','Finished']
 ngOnInit(): void {
   this.myForm= new FormGroup({
    'projectname': new FormControl(null,[Validators.required, this.PNameForbidden.bind(this)]),
    'email': new FormControl(null,[Validators.required,Validators.email]),
     'projectstatus': new FormControl('Finished',Validators.required)
   });
 }

 OnSubmit(){
  console.log(this.myForm);
  console.log(this.myForm.value.projectname);
  console.log(this.myForm.value.email);
  console.log(this.myForm.value.projectstatus);

 }

 PNameForbidden(control: FormControl):{[s:string]:boolean}{
if(control.value==='test') return {'nameIsForbidden': true};
return null;
 }
}
