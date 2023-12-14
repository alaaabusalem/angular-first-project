import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {
   console.log(value);
    let newValue='';
    for(let i=value.length-1 ; i>=0 ; i--){
      newValue=newValue+ value[i];
    }
    return newValue;
  }

}
