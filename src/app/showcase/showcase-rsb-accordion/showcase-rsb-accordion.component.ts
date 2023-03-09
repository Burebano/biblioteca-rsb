import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-rsb-accordion',
  templateUrl: './showcase-rsb-accordion.component.html'
})

export class ShowcaseRsbAccordionComponent
{
  constructor(private rsbToast:RsbToastService, private RsbCache:RsbCacheService) { this.RsbCache.setElement('title', 'Accordion'); }
  openAccordionEx1($event)
  {
    if($event)
    {
      this.rsbToast.addSuccessMessage('Open', 'Abriendo el cordeón 1.');
    }
    else 
    {
      this.rsbToast.addErrorMessage('Close', 'Cerrando el cordeón 1.');
    }    
  }    
  openAccordionEx2($event)
  {
    if($event)
    {
      this.rsbToast.addSuccessMessage('Open', 'Abriendo el cordeón 2.');
    }
    else 
    {
      this.rsbToast.addErrorMessage('Close', 'Cerrando el cordeón 2.');
    }    
  }
}
