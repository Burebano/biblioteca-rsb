import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class RsbJoinPipe implements PipeTransform {

  transform(value: string[], separator: string = ", "): any {
    if(!value){
      return 'El array está vacío.';
    }
    return value.join(separator);
  }

}
