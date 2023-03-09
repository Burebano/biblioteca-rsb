import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rsb-block-list-data-item',
  templateUrl: './rsb-block-list-data-item.component.html',
  styleUrls: ['./rsb-block-list-data-item.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class RsbBlockListDataItemComponent implements OnInit {

  @Input() label:string;
  @Input() value:string;

  constructor() { }

  ngOnInit() {
  }

}
