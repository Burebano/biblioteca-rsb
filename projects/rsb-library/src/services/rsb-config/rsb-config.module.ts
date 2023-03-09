import { NgModule } from '@angular/core';
import { RsbConfigPipe } from './rsb-config.pipe';
import { RsbConfigService } from './rsb-config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [	
    RsbConfigPipe
 ],
 exports: [	
  RsbConfigPipe
],
providers: [	
  RsbConfigService
]
})
export class RsbConfigModule { }
 