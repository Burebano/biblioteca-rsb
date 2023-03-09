import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';

@Component({
  selector: 'app-showcase-rsb-detail',
  templateUrl: './showcase-rsb-detail.component.html'
})

export class ShowcaseRsbDetailComponent
{
  public showDetail:boolean;
  public showDetailTitle:boolean;
  public showDetailOverlay:boolean;
  constructor(private RsbCache:RsbCacheService)
  {
    this.RsbCache.setElement('title', 'Detail');
    this.showDetailTitle = true;
    this.showDetailOverlay = true;
  }
  openDetailEx1()
  {
    this.showDetailTitle = true;
    this.showDetailOverlay = true;
    this.showDetail = true;
  }
  openDetailEx2()
  {
    this.showDetailTitle = false;
    this.showDetailOverlay = true;
    this.showDetail = true;
  }
  openDetailEx3()
  {
    this.showDetailTitle = true;
    this.showDetailOverlay = false;
    this.showDetail = true;
  }
  closeDetail() { this.showDetail = false; }
}
