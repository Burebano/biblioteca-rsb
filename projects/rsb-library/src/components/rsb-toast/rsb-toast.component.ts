import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RsbToastService } from './rsb-toast.service';
import { RsbToast } from './bean/rsb-toast';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'rsb-toast',
  templateUrl: './rsb-toast.component.html',
  styleUrls: ['./rsb-toast.component.scss'], 
  encapsulation: ViewEncapsulation.None,
  animations: [trigger('overlayAnimation', [
    state('void', style({transform: 'translateY(5%)', opacity: 0})),
    state('visible', style({transform: 'translateY(0)', opacity: 1})),
    transition('void => visible', animate('225ms ease-out')),
    transition('visible => void', animate('195ms ease-out'))
  ])]
})
export class RsbToastComponent implements OnInit {

  @Input() timeout:number;

  constructor(public toastService:RsbToastService) { }

  ngOnInit()
  {
    if(this.timeout)
    {
      this.toastService.timeout = this.timeout;
    }
  }

  closeToast(toast:RsbToast)
  {
    this.toastService.closeToast(toast);
  }

}
