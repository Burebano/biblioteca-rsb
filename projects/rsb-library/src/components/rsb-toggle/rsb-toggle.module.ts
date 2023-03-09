import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbToggleComponent } from './rsb-toggle.component';
import { RsbNgModelBaseModule } from '../rsb-ng-model-base/rsb-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule, 
    RsbNgModelBaseModule
  ],
  declarations: [RsbToggleComponent],
  exports: [RsbToggleComponent]
})
export class RsbToggleModule { }
