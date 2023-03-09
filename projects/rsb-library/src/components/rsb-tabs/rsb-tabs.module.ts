import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbTabsComponent } from './rsb-tabs.component';
import { RsbTabItemComponent } from './rsb-tab-item/rsb-tab-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RsbTabsComponent,
    RsbTabItemComponent
  ],
  exports: [
    RsbTabsComponent,
    RsbTabItemComponent
  ]
})
export class RsbTabsModule { }
