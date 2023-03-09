import { RsbModalService } from './rsb-modal.service';
import { RsbConstantsService } from '../../services/rsb-constants.service';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rsb-modal',
  templateUrl: './rsb-modal.component.html',
  styleUrls: ['./rsb-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RsbModalComponent implements OnInit
{

  @Input() id:string;
  @Input() type:string = this.constants.RsbModalTypeConstants.INFO;
  @Input() labelConfirm:string;
  @Input() labelClose:string;
  @Input() forceClose:boolean = false;

  @Output() close:EventEmitter<MouseEvent>;
  @Output() accept:EventEmitter<MouseEvent>;

  public show:boolean;

  constructor(public constants:RsbConstantsService, private rsbModal:RsbModalService)
  {
    this.close = new EventEmitter<MouseEvent>();
    this.accept = new EventEmitter<MouseEvent>();
    this.show = false;
  }

  ngOnInit()
  {
    if(!this.id)
    {
      console.log("Modal must have id");
      return;
    }
    this.rsbModal.add(this);
  }

  onConfirm($event:MouseEvent) 
  {
    this.accept.emit($event);
    this.rsbModal.close(this.id);
  }

  onClose($event:MouseEvent)
  {
    this.close.emit($event);
    this.rsbModal.close(this.id);
  }

  onclickOutside($event:MouseEvent)
  {
    this.close.emit($event);
    this.rsbModal.close(this.id);
  }

}
