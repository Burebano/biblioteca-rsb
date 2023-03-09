import { Directive, HostListener, OnInit } from '@angular/core';
import { RsbResolutionService } from './rsb-resolution.service';

@Directive({
  selector: '[rsbResolution]'
})
export class RsbResolutionDirective implements OnInit {
  
  constructor(private resolution:RsbResolutionService)
  {
    
  }

  ngOnInit(): void {
    this.sendSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event)
  {
    this.sendSize(event.currentTarget.innerWidth);
  }
  sendSize(width: number)
  {
    this.resolution.setSize(width);
  }

}
