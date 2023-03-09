import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RsbConstantsService } from '../../services/rsb-constants.service';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

@Component({
  selector: 'rsb-accordion',
  templateUrl: './rsb-accordion.component.html',
  styleUrls: ['./rsb-accordion.component.scss'],  
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [
      state('open', style({height: '*'})),
      state('close', style({height: 0})),
      transition('open <=> close', group([
        animate('400ms')
      ]))
    ])
  ]
})
export class RsbAccordionComponent implements AfterViewInit {

  @Input() title:string;
  @Input() open:boolean = false;

  @Output() clickOpen:EventEmitter<boolean>;

  @ViewChild("contentAccordeon") contentAccordeon:ElementRef;

  public state:string;

  constructor(public constants:RsbConstantsService)
  {
    this.state = this.constants.RsbAccorionConstants.CLOSE;
    this.clickOpen = new EventEmitter<boolean>();
  }

  ngAfterViewInit()
  {
    this.state = this.open ? this.constants.RsbAccorionConstants.OPEN : this.constants.RsbAccorionConstants.CLOSE;
    if(this.open)
    {
      this.contentAccordeon.nativeElement.style.overflow = 'hidden';  
      setTimeout(() => {
        this.contentAccordeon.nativeElement.style.overflow = 'inherit';
      }, 400);
    }
  }

  openClose()
  {
    if(this.state === this.constants.RsbAccorionConstants.OPEN)
    {
      this.state = this.constants.RsbAccorionConstants.CLOSE;
    }
    else 
    {
      this.state = this.constants.RsbAccorionConstants.OPEN;
    }
    this.contentAccordeon.nativeElement.style.overflow = 'hidden';
    if(this.state === this.constants.RsbAccorionConstants.CLOSE)
    {
      setTimeout(() => {
        this.open = !this.open;
        this.clickOpen.emit(this.open);
      }, 400);
    }
    else 
    {
      this.open = !this.open;
      this.clickOpen.emit(this.open);
      setTimeout(() => {
        this.contentAccordeon.nativeElement.style.overflow = 'inherit';
      }, 400);
    }
  }
}
