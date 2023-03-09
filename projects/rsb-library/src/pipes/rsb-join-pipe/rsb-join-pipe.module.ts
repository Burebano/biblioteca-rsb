import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbJoinPipe } from './rsb-join.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
      RsbJoinPipe
   ],
   exports: [	
    RsbJoinPipe
   ]
})
export class RsbJoinPipeModule { }
