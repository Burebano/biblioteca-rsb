import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { RsbNgModelBase } from '../rsb-ng-model-base/rsb-ng-model-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rsb-toggle',
  templateUrl: './rsb-toggle.component.html',
  styleUrls: ['./rsb-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RsbToggleComponent),
    multi: true
  }]
})
export class RsbToggleComponent extends RsbNgModelBase {

  @Input() label:string;
  @Output() toggled:EventEmitter<boolean>;

  constructor()
  {
    super();
    this.toggled = new EventEmitter<boolean>();
  }

  onClick()
  {
    this.value = !this.value;
    this.toggled.emit(this.value);
  }

}
