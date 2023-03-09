import { Component, OnInit } from '@angular/core';
import { RsbTranslateService } from '../../../../projects/rsb-library/src/services/rsb-translate/rsb-translate.service';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-rsb-translate',
  templateUrl: './showcase-rsb-translate.component.html'
})

export class ShowcaseRsbTranslateComponent implements OnInit
{
  constructor(private rsbTranslate:RsbTranslateService, private RsbToast:RsbToastService, private RsbCache:RsbCacheService) { this.RsbCache.setElement('title', 'Translate'); }
  ngOnInit()
  {
    console.log(this.rsbTranslate.getTranslate('label.example.1'));
    console.log(this.rsbTranslate.getTranslate('label.example.2'));
    this.RsbToast.addInfoMessage('Mensaje traducido', 'label.example.1 => ' + this.rsbTranslate.getTranslate('label.example.1'));
    this.RsbToast.addInfoMessage('Mensaje traducido', 'label.example.2 => ' + this.rsbTranslate.getTranslate('label.example.2'));
  }
}
