import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output, ContentChild, TemplateRef, QueryList, ViewChildren, OnChanges, SimpleChanges } from '@angular/core';
import { RsbAction } from '../../../common/rsb-action';
import { RsbConstantsService } from '../../../services/rsb-constants.service';
import { RsbBlockItem } from '../bean/rsb-block-item';
import { RsbBlockListItemComponent } from '../rsb-block-list-item/rsb-block-list-item.component';
import { RsbSelectedItem } from '../../../common/rsb-selected-item';

@Component({
  selector: 'rsb-block-list',
  templateUrl: './rsb-block-list.component.html',
  styleUrls: ['./rsb-block-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RsbBlockListComponent<T> implements OnInit, OnChanges {

  @Input() blockItems:RsbBlockItem<T>[];
  @Input() labelNoResults:string = 'No results.';

  @Input() showHeader:boolean = true;
  @Input() showInfoAdditional:boolean = true;
  @Input() showActions:boolean = true;
  @Input() showBorder:boolean = true;

  @Input() pagination:number = this.constants.RsbBlockListConstants.PAGINATION_DEFAULT;
  @Input() previousLabel:string = 'Previa';
  @Input() nextLabel:string = 'Siguiente';

  @Output() itemSelected:EventEmitter<RsbSelectedItem<T>>;
  @Output() actionSelected:EventEmitter<RsbAction<T>>;

  @ContentChild('templateHeader', {static: false}) templateHeader:TemplateRef<any>;
  @ContentChild('templateInfoAdditional', {static: false}) templateInfoAdditional:TemplateRef<any>;
  @ContentChild('templateData', {static: false}) templateData:TemplateRef<any>;

  public page:number;

  @ViewChildren(RsbBlockListItemComponent) blocks:QueryList<RsbBlockListItemComponent<T>>;

  constructor(private constants:RsbConstantsService)
  {
    this.page = 1;
    this.itemSelected = new EventEmitter<RsbSelectedItem<T>>();
    this.actionSelected = new EventEmitter<RsbAction<T>>();
  }

  ngOnChanges(changes:SimpleChanges):void
  {
    if(changes)
    {
      if(changes['blockItems'] && !changes['blockItems'].firstChange)
      {
        if(((this.page - 1) * this.pagination) == changes['blockItems'].currentValue.length)
        {
          this.page = this.page - 1;
        }
      }
    }
  }

  ngOnInit()
  {
    if(this.pagination < 0)
    {
      this.pagination = this.constants.RsbBlockListConstants.PAGINATION_DEFAULT;
    }
  }

  sendAction($event:RsbAction<T>)
  {
    this.actionSelected.emit($event);
  }

  selectItem(blockItem:RsbBlockItem<T>, index:number)
  {
    let selectedItem = new RsbSelectedItem<T>();
    selectedItem.item = blockItem.item;
    selectedItem.index = ((this.page - 1) * this.pagination) + index;
    this.itemSelected.emit(selectedItem);
  }

  closeAllOptionsExcept(id:string)
  {
    this.blocks.forEach(block => {
      if(block.id !== id)
      {
        block.showOptions = false;        
      }
    })
  }

}
