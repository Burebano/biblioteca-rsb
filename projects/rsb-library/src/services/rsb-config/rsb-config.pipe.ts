import { Pipe, PipeTransform } from '@angular/core';
import { RsbConfigService } from './rsb-config.service';

@Pipe({
  name: 'rsbConfig'
})
export class RsbConfigPipe implements PipeTransform {

  constructor(private rsbConfig:RsbConfigService) {}
  transform(path:string): any {
    return this.rsbConfig.getData(path);
  }

}
