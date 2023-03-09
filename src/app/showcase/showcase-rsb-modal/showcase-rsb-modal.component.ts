import { Component } from '@angular/core';
import { RsbConstantsService } from '../../../../projects/rsb-library/src/services/rsb-constants.service';
import { RsbModalService } from '../../../../projects/rsb-library/src/components/rsb-modal/rsb-modal.service';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-rsb-modal',
  templateUrl: './showcase-rsb-modal.component.html'
})

export class ShowcaseRsbModalComponent
{  
  constructor(public constants:RsbConstantsService, private rsbModal:RsbModalService, private rsbToast:RsbToastService, private RsbCache:RsbCacheService) { this.RsbCache.setElement('title', 'Modal'); }
  openModal(id:string)
  {
    console.log(this.rsbModal);
    this.rsbToast.addInfoMessage('Modal', 'Modal abierta.');
    this.rsbModal.open(id);
  }
  acceptModal() { this.rsbToast.addSuccessMessage('Modal', 'Modal aceptada.'); }
  closeModal() { this.rsbToast.addErrorMessage('Modal', 'Modal cerrada.'); }
}