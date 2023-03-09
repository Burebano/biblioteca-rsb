import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-rsb-toggle',
  templateUrl: './showcase-rsb-toggle.component.html'
})

export class ShowcaseRsbToggleComponent
{
  public valueExNgModel:boolean = true;  
  constructor(private RsbCache:RsbCacheService, private rsbToast:RsbToastService)
  {
    this.RsbCache.setElement('title', 'Toggle');
    this.valueExNgModel = true;
  }
  changeToggle($event)
  {
    if($event)
    {
      this.rsbToast.addSuccessMessage('Activado', 'El toggle se ha activado.');
    }
    else 
    {
      this.rsbToast.addErrorMessage('Desactivado', 'El toggle se ha desactivado.');
    }
  }
}
