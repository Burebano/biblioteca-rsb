import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbSpinnerComponent } from './rsb-spinner.component';
import { RsbSpinnerService } from './rsb-spinner.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RsbSpinnerComponent], 
  exports: [RsbSpinnerComponent],
  providers: [RsbSpinnerService]
})
export class RsbSpinnerModule { }
