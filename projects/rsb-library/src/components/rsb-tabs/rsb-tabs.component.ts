import { AfterViewInit, Component, ContentChildren, OnInit, QueryList, ViewEncapsulation, TemplateRef } from '@angular/core';
import { RsbTabItemComponent } from './rsb-tab-item/rsb-tab-item.component';

@Component({
  selector: 'rsb-tabs',
  templateUrl: './rsb-tabs.component.html',
  styleUrls: ['./rsb-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None, 
})
export class RsbTabsComponent implements AfterViewInit {

  @ContentChildren(RsbTabItemComponent) tabsItems:QueryList<RsbTabItemComponent>
  public contentTemplate:TemplateRef<any>;

  constructor() { }

  ngAfterViewInit(): void {
    if(this.tabsItems.toArray().length > 0)
    {
      this.open(this.tabsItems.toArray()[0]);
    }
  }

  open(tab:RsbTabItemComponent)
  {
    this.tabsItems.forEach(t => t.selected = false);
    tab.selected = true;
    this.contentTemplate = tab.contentTemplate;
  }

}
