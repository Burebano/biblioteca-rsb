import { Pipe, PipeTransform } from '@angular/core';
import { RsbTranslateService } from './rsb-translate.service';

@Pipe({
  name: 'rsbTranslate'
})
export class RsbTranslatePipe implements PipeTransform {

  constructor(private rsbTranslate:RsbTranslateService) {}
  
  transform(value:string):any
  {
    return this.rsbTranslate.getTranslate(value) ? this.rsbTranslate.getTranslate(value) : value;
  }

}
