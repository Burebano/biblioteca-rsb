import { Component, OnInit } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbSelectItem } from '../../../../projects/rsb-library/src/common/rsb-select-item';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-rsb-dropdown',
  templateUrl: './showcase-rsb-dropdown.component.html'
})

export class ShowcaseRsbDropdownComponent implements OnInit
{
  public options:RsbSelectItem[];
  public valueEx2:any;
  public valueEx3:any;
  constructor(private rsbToast:RsbToastService, private RsbCache:RsbCacheService) { this.RsbCache.setElement('title', 'Dropdown'); }
  ngOnInit()
  {
    this.options = [
      new RsbSelectItem('Label 1', 'Value1'),
      new RsbSelectItem('Label 2', 'Value2'),
      new RsbSelectItem('Label 3', 'Value3'),
      new RsbSelectItem('Label 4', 'Value4'),
    ];    
    this.valueEx2 = 'Value2';
    this.valueEx3 = 'Value3';
  }
  select($event)
  {
    console.log($event);
    this.rsbToast.addSuccessMessage('Exito', 'Has elegido: ' + JSON.stringify($event));
  }
}
