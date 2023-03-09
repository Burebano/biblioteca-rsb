import { Component, OnInit, ViewEncapsulation, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'rsb-tab-item',
  templateUrl: './rsb-tab-item.component.html',
  styleUrls: ['./rsb-tab-item.component.scss'],
  encapsulation: ViewEncapsulation.None, 
})
export class RsbTabItemComponent {

  @Input() title:string;
  @ViewChild('contentTemplate', {static: false}) contentTemplate:TemplateRef<any>;
  public selected:boolean;

  constructor() {
    this.selected = false;
  }

}
