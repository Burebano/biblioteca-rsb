import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-click-outside',
  templateUrl: './showcase-rsb-click-outside.component.html',
  styleUrls: ['./showcase-rsb-click-outside.component.scss']
})

export class ShowcaseClickOutsideComponent
{
  public mode:string;
  constructor(private rsbToast:RsbToastService, private RsbCache:RsbCacheService)
  {
    this.RsbCache.setElement('title', 'Click outside');
    this.mode = 'estandar';
  }
  openEstandar() { this.mode = 'estandar'; }
  openDelay() { this.mode = 'delay'; }
  openDesactivado() { this.mode = 'desactivado'; }
  openAvoidFirstTime() { this.mode = 'avoid first time'; }
  clickOutside($event)
  {
    console.log($event);
    this.rsbToast.addSuccessMessage('Éxito', 'Click fuera del elemento');    
  }
}
