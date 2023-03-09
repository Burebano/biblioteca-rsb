import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbToastComponent } from './rsb-toast.component';
import { RsbToastService } from './rsb-toast.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RsbToastComponent],
  exports: [RsbToastComponent],
  providers: [RsbToastService]
})
export class RsbToastModule { }
