import { Component, OnInit } from '@angular/core';
import { RsbCacheService } from '../services/rsb-cache.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor(public rsbCache:RsbCacheService)
  {
    this.rsbCache.setElement('title', 'Biblioteca RSB');
  }

  ngOnInit() { }

}
