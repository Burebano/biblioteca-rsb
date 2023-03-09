import { Component } from '@angular/core';
import { RsbResolutionService } from '../../../../projects/rsb-library/src/services/rsb-resolution/rsb-resolution.service';
import { RsbConstantsService } from '../../../../projects/rsb-library/src/services/rsb-constants.service';
import { RsbCacheService } from '../../services/rsb-cache.service';

@Component({
  selector: 'app-showcase-rsb-resolution',
  templateUrl: './showcase-rsb-resolution.component.html'
})

export class ShowcaseRsbResolutionComponent
{
  constructor(public rsbResolution:RsbResolutionService, public rsbConstants:RsbConstantsService, private RsbCache:RsbCacheService) { this.RsbCache.setElement('title', 'Resolutions'); }
}