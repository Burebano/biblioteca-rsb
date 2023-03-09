import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbLoadIframeDirective } from './rsb-load-iframe.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
      RsbLoadIframeDirective
   ],
   exports: [RsbLoadIframeDirective]
})
export class RsbLoadIframeModule { }
