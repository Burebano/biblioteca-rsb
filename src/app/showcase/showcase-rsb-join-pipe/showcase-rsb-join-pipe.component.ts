import { Component } from '@angular/core';
import { RsbCacheService } from '../../services/rsb-cache.service';

@Component({
  selector: 'app-showcase-rsb-join-pipe',
  templateUrl: './showcase-rsb-join-pipe.component.html'
})

export class ShowcaseRsbJoinPipeComponent
{

  public  valoresNulo = null;
  public  valores:string[];

  constructor(private RsbCache:RsbCacheService)
  {
    this.RsbCache.setElement('title', 'Join pipe');
    this.valores = ["1", "2", "tres", "4"];
  }

}
