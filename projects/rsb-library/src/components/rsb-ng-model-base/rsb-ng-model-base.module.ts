import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbNgModelBase } from './rsb-ng-model-base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RsbNgModelBase],
  exports: [RsbNgModelBase]
})
export class RsbNgModelBaseModule { }
