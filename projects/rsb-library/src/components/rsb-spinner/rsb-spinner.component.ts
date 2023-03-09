import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RsbSpinnerService } from './rsb-spinner.service';

@Component({
  selector: 'rsb-spinner',
  templateUrl: './rsb-spinner.component.html',
  styleUrls: ['./rsb-spinner.component.scss'], 
  encapsulation: ViewEncapsulation.None
})
export class RsbSpinnerComponent implements OnInit {

  @Input() embedded:boolean = false;
  @Input() pathImg:string = 'resources/img/spinner.gif';


  constructor(public rsbSpinner: RsbSpinnerService) { }

  ngOnInit() { }

}
