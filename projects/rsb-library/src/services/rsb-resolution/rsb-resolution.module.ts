import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbResolutionDirective } from './rsb-resolution.directive';
import { RsbResolutionService } from './rsb-resolution.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RsbResolutionDirective], 
  exports: [RsbResolutionDirective], 
  providers: [RsbResolutionService]
})
export class RsbResolutionModule { }
