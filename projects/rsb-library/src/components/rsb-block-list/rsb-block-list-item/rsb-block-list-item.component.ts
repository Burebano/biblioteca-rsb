import { cloneDeep } from 'lodash-es';
import { RsbAction } from '../../../common/rsb-action';
import { RsbBlockItem } from '../bean/rsb-block-item';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rsb-block-list-item',
  templateUrl: './rsb-block-list-item.component.html',
  styleUrls: ['./rsb-block-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RsbBlockListItemComponent<T> implements OnInit {

  @Input() blockItem:RsbBlockItem<T>;
  @Input() id:string;

  @Input() showHeader:boolean = true;
  @Input() showInfoAdditional:boolean = true;
  @Input() showActions:boolean = true;
  @Input() showBorder:boolean = true;

  @Input() templateHeader:TemplateRef<any>;
  @Input() templateInfoAdditional:TemplateRef<any>;
  @Input() templateData:TemplateRef<any>;
  
  @Output() actionSelected:EventEmitter<RsbAction<T>>;
  @Output() closeOptions:EventEmitter<string>;

  public showOptions:boolean;

  constructor()
  {
    this.actionSelected = new EventEmitter<RsbAction<T>>();
    this.closeOptions = new EventEmitter<string>();
    this.showOptions = false;
  }

  ngOnInit()
  {
    this.showActions = this.showActions && this.blockItem.actions && this.blockItem.actions.length > 0;
  }

  openActions($event:MouseEvent)
  {
    $event.stopPropagation();
    this.showOptions = true;
    this.closeOptions.emit(this.id);
  }

  sendAction($event:MouseEvent, action:RsbAction<T>, index:number)
  {
    $event.stopPropagation();
    this.showOptions = false;
    let actionSended:RsbAction<T> = cloneDeep(action);
    actionSended.item = this.blockItem.item;
    // actionSended.index = index;
    this.actionSelected.emit(actionSended);
  }

  hideOptions()
  {
    this.showOptions = false;
  }

}
