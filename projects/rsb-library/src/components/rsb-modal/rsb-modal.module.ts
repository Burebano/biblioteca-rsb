import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbModalComponent } from './rsb-modal.component';
import { ClickOutsideModule } from '../../directives/rsb-click-outside/rsb-click-outside.module';
import { RsbModalService } from './rsb-modal.service';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  declarations: [RsbModalComponent],
  exports: [RsbModalComponent],
  providers: [RsbModalService]
})
export class RsbModalModule { }
