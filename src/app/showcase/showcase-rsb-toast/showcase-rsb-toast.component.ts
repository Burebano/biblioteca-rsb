import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-rsb-toast',
  templateUrl: './showcase-rsb-toast.component.html'
})

export class ShowcaseRsbToastComponent
{
  constructor(private rsbToast:RsbToastService, private RsbCache:RsbCacheService) { this.RsbCache.setElement('title', 'Toast'); }
  addInfo() { this.rsbToast.addInfoMessage('Info', 'Mensaje info.'); }
  addError() { this.rsbToast.addErrorMessage('Error', 'Mensaje error.'); }
  addWarning() { this.rsbToast.addWarningMessage('Warning', 'Mensaje warning.'); }
  addSuccess() { this.rsbToast.addSuccessMessage('Success', 'Mensaje success.'); }
}