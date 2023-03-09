import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbAccordionComponent } from './rsb-accordion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RsbAccordionComponent],
  exports: [RsbAccordionComponent]
})
export class RsbAccordionModule { }
