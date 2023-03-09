import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbTranslatePipe } from './rsb-translate.pipe';
import { RsbTranslateService } from './rsb-translate.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [RsbTranslatePipe], 
   exports: [RsbTranslatePipe], 
   providers: [RsbTranslateService]
})
export class RsbTranslateModule { }
