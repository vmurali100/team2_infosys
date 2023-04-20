import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usr'
})
export class UsrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    console.log(args)
     if(value > 45){
      return "High Price"
     }else if(value < 45){
      return "Low Price"
     }else{
      return "Good price"
     }
  }

}
