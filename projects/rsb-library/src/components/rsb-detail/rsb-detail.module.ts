import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbDetailComponent } from './rsb-detail.component';
import { ClickOutsideModule } from '../../directives/rsb-click-outside/rsb-click-outside.module';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  declarations: [RsbDetailComponent],
  exports: [RsbDetailComponent]
})
export class RsbDetailModule { }
