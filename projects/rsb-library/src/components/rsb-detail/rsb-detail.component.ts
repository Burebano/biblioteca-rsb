import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'rsb-detail',
  templateUrl: './rsb-detail.component.html',
  styleUrls: ['./rsb-detail.component.scss'],
  encapsulation: ViewEncapsulation.None, 
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('600ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({transform: 'translateX(1000%)'}))
      ])
    ])
  ]
})
export class RsbDetailComponent implements OnInit {

  @Input() showOverlay:boolean = true; 
  @Input() showTitle:boolean = true; 
  @Input() clickOutsideEnabled:boolean = true; 
  @Output() close:EventEmitter<boolean>;

  public showDetail:boolean;

  constructor()
  {
    this.close = new EventEmitter<boolean>();
    this.showDetail = true;
  }

  ngOnInit() { }

  closeDetail()
  {
    this.showDetail = false;
    setTimeout(() => {
      this.close.emit(true);
    }, 600);
  }

}
