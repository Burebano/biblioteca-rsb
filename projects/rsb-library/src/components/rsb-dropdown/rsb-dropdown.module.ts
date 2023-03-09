import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbDropdownComponent } from './rsb-dropdown.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from '../../directives/rsb-click-outside/rsb-click-outside.module';
import { RsbNgModelBaseModule } from '../rsb-ng-model-base/rsb-ng-model-base.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    RsbNgModelBaseModule
  ],
  declarations: [RsbDropdownComponent],
  exports: [RsbDropdownComponent],
})
export class RsbDropdownModule { }
