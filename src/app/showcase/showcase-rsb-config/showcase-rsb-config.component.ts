import { Component } from '@angular/core';
import { RsbConfigService } from '../../../../projects/rsb-library/src/services/rsb-config/rsb-config.service';
import { RsbCacheService } from '../../services/rsb-cache.service';

@Component({
  selector: 'app-showcase-rsb-config',
  templateUrl: './showcase-rsb-config.component.html'
})

export class ShowcaseRsbConfigComponent
{
  constructor(private rsbConfig:RsbConfigService, private RsbCache:RsbCacheService)
  {
    this.RsbCache.setElement('title', 'Config');
    console.log(this.rsbConfig.getAllData());
    console.log(this.rsbConfig.getData('variable2'));
  }
}
