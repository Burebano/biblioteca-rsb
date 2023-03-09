import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';

@Component({
  selector: 'app-showcase-rsb-tabs',
  templateUrl: './showcase-rsb-tabs.component.html'
})

export class ShowcaseRsbTabsComponent
{
  constructor(private RsbCache:RsbCacheService) { this.RsbCache.setElement('title', 'Pestañas'); }
}