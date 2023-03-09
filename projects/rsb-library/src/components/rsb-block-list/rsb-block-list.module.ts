import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbBlockListComponent } from './rsb-block-list/rsb-block-list.component';
import { RsbBlockListItemComponent } from './rsb-block-list-item/rsb-block-list-item.component';
import { RsbBlockListDataItemComponent } from './rsb-block-list-data-item/rsb-block-list-data-item.component';
import { ClickOutsideModule } from '../../directives/rsb-click-outside/rsb-click-outside.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule, 
    ClickOutsideModule, 
    NgxPaginationModule
  ],
  declarations: [
    RsbBlockListComponent,
    RsbBlockListDataItemComponent,     
    RsbBlockListItemComponent,     
  ],
  exports: [
    RsbBlockListComponent,
    RsbBlockListDataItemComponent
  ]
})
export class RsbBlockListModule { }