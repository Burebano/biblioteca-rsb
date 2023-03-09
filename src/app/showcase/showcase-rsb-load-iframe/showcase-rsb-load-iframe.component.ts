import { Component } from '@angular/core';
import { RsbSpinnerService } from '../../../../projects/rsb-library/src/components/rsb-spinner/rsb-spinner.service';
import { RsbCacheService } from '../../services/rsb-cache.service';

@Component({
  selector: 'app-showcase-rsb-load-iframe',
  templateUrl: './showcase-rsb-load-iframe.component.html'
})

export class ShowcaseRsbLoadIframeComponent
{
  constructor(private rsbSpinner:RsbSpinnerService, private RsbCache:RsbCacheService)
  {
    this.rsbSpinner.showSpinner();
    this.RsbCache.setElement('title', 'Load iframe');
  }
  load()
  {
    console.log('Iframe cargado.');
    this.rsbSpinner.hideSpinner();
  }
}
