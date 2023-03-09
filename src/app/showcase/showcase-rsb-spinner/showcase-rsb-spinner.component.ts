import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbSpinnerService } from '../../../../projects/rsb-library/src/components/rsb-spinner/rsb-spinner.service';

@Component({
  selector: 'app-showcase-rsb-spinner',
  templateUrl: './showcase-rsb-spinner.component.html',
  styleUrls: ['./showcase-rsb-spinner.component.scss']
})

export class ShowcaseRsbSpinnerComponent
{
  public embedded?:boolean;
  constructor(public rsbSpinner:RsbSpinnerService, private RsbCache:RsbCacheService)
  {
    this.RsbCache.setElement('title', 'Spinner');
    this.embedded = false;
  }
  showSpinnerEx1()
  {
    this.embedded = false;
    this.rsbSpinner.showSpinner();
    setTimeout(() => { this.rsbSpinner.hideSpinner(); }, 2500);
  }
  showSpinnerEx2()
  {
    this.embedded = true;
    this.rsbSpinner.showSpinner();
    setTimeout(() => { this.rsbSpinner.hideSpinner(); }, 2500);
  }
}