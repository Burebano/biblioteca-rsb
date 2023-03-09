import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { RsbSelectItem } from '../../common/rsb-select-item';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RsbNgModelBase } from '../rsb-ng-model-base/rsb-ng-model-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from 'lodash-es';

@Component({
  selector: 'rsb-dropdown',
  templateUrl: './rsb-dropdown.component.html',
  styleUrls: ['./rsb-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('ovelayAnimation', [
    state('void', style({
      transform: 'translateY(5%)',
      opacity: 0
    })),
    state('visible', style({
      transform: 'translateY(0)',
      opacity: 1
    })),
    transition('void => visible', animate('225ms ease-out')),
    transition('visible => void', animate('225ms ease-in'))
  ])],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RsbDropdownComponent),
      multi: true
    }
  ]
})
export class RsbDropdownComponent extends RsbNgModelBase implements OnInit
{

  @Input() options:RsbSelectItem[] = [];
  // @Input() valueSelected:any;
  @Input() labelNoResults:string = 'No results';

  @Output() selectItem:EventEmitter<RsbSelectItem>;

  @ContentChild(TemplateRef, {static: false}) template:TemplateRef<any>;

  public showItems:boolean;
  public optionsShow:RsbSelectItem[];
  public valueShow:string;
 
  constructor()
  {
    super();
    this.showItems = false;
    this.selectItem = new EventEmitter<RsbSelectItem>();    
  }

  ngOnInit()
  {
    // if(this.valueSelected) { this.preload(); }
    this.optionsShow = this.options.slice(0);
    this.firstValue.subscribe((v:any) => { this.preload(v)});
  }

  preload(v:any)
  {
    // let optionFound = this.options.find(option => option.value === this.valueSelected);
    let optionFound = this.options.find(option => isEqual(option.value, v));
    if(optionFound)
    {
      this.valueShow = optionFound.label;
      this.value = optionFound.value;
      this.onSelectedItem(optionFound);
    }
  }
  
  showPanelOptions() { this.showItems = !this.showItems; }

  filter(searchWord:string)
  {
    this.optionsShow = this.options.filter(option => option.label.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()));
  }

  onSelectedItem(item:RsbSelectItem)
  {
    if(item instanceof RsbSelectItem)
    {
      this.showItems = false;
      console.log(item);
      this.valueShow = item.label;
      this.value = item.value;
      this.selectItem.emit(item);
    }
  }

  hidePanelItems() { this.showItems = false; }
}

