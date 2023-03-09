import { Component, OnInit } from '@angular/core';
import { Appointment } from './Appointment';
import { RsbCacheService } from '../../services/rsb-cache.service';
import { RsbBlockItem } from '../../../../projects/rsb-library/src/components/rsb-block-list/bean/rsb-block-item';
import { RsbAction } from '../../../../projects/rsb-library/src/common/rsb-action';
import { RsbSelectedItem } from '../../../../projects/rsb-library/src/common/rsb-selected-item';
import { RsbToastService } from '../../../../projects/rsb-library/src/components/rsb-toast/rsb-toast.service';

@Component({
  selector: 'app-showcase-rsb-block-list',
  templateUrl: './showcase-rsb-block-list.component.html'
})

export class ShowcaseRsbBlockListComponent implements OnInit
{

  public blockItems:RsbBlockItem<Appointment>[];
  public CANCEL_APPOINTMENT:string = 'CANCEL_APPOINTMENT';
  public BEFORE_APPOINTMENT:string = 'BEFORE_APPOINTMENT';
  public pagination:number; 
  public showHeader:boolean;
  public showInfoAdditional:boolean;
  public showActions:boolean;
  public showBorder:boolean;

  constructor(public rsbCache:RsbCacheService, private rsbToast:RsbToastService)
  {
    this.rsbCache.setElement('title', 'Block list');
    this.blockItems = [];    
    this.pagination = 5; 
    this.showHeader = true;
    this.showInfoAdditional = true;
    this.showActions = true;
    this.showBorder = true;
  }

  ngOnInit()
  {
    let appointments:Appointment[] = [
      {
        date: "2021-08-10",
        status: "complete", 
        client: "Fernanco",
        age: 27
      },
      {
        date: "2022-08-10",
        status: "canceled", 
        client: "Ramón",
        age: 28
      },
      {
        date: "2010-08-10",
        status: "unknown", 
        client: "Jose",
        age: 28
      },
      {
        date: "2023-08-10",
        status: "in course", 
        client: "Francisco",
        age: 30
      },
      {
        date: "2023-08-10",
        status: "in course", 
        client: "Francisco",
        age: 31
      },
      {
        date: "2023-08-10",
        status: "in course", 
        client: "Francisco",
        age: 32
      }
    ];
    let actions:RsbAction<Appointment>[] = [
      {
        label: 'Cancelar cita',
        value: this.CANCEL_APPOINTMENT
      },
      {
        label: 'Ver citas anteriores',
        value: this.BEFORE_APPOINTMENT,
        icon: 'fa fa-file'        
      }
    ];
    appointments.forEach(ap =>
    {
      let blockItem = new RsbBlockItem<Appointment>();
      blockItem.item = ap;
      switch(ap.status)
      {
        case 'complete':
          blockItem.borderColor = 'green'
          break;
        case 'canceled':
          blockItem.borderColor = 'red'
          break;
        case 'in course':
          blockItem.borderColor = 'blue'
          break;
        case 'unknown':
          blockItem.borderColor = 'grey'
          break;
      }
      if(blockItem.item.status !== 'in course')
      {
        blockItem.actions = actions.slice(1);
      }
      else 
      {
        blockItem.actions = actions;
      }
      this.blockItems.push(blockItem);
    });
  }
  getAction($event)
  {
    console.log($event);
    this.rsbToast.addInfoMessage('Acción seleccionada', JSON.stringify($event));
  }
  selectItem($event:RsbSelectedItem<Appointment>)
  {
    console.log($event);
    this.rsbToast.addInfoMessage('Item seleccionado', JSON.stringify($event));
  }
  addBlock()
  {
    let ap:Appointment = 
    {
      date: "2023-08-10",
      status: "in course", 
      client: "Francisco",
      age: 30
    };
    let actions:RsbAction<Appointment>[] = [
      {
        label: 'Cancelar cita',
        value: this.CANCEL_APPOINTMENT
      },
      {
        label: 'Ver citas anteriores',
        value: this.BEFORE_APPOINTMENT,
        icon: 'fa fa-file'        
      }
    ];
    let blockItem = new RsbBlockItem<Appointment>();
      blockItem.item = ap;
      switch(ap.status) {
        case 'complete':
          blockItem.borderColor = 'green'
          break;
        case 'canceled':
          blockItem.borderColor = 'red'
          break;
        case 'in course':
          blockItem.borderColor = 'blue'
          break;
        case 'unknown':
          blockItem.borderColor = 'grey'
          break;
      }
      if(blockItem.item.status !== 'in course')
      {
        blockItem.actions = actions.slice(1);
      }
      else 
      {
        blockItem.actions = actions;
      }
      this.blockItems.push(blockItem);
  }
  removeFirstBlock() { this.blockItems = this.blockItems.slice(1); }
  removeLastBlock() { this.blockItems = this.blockItems.slice(0, this.blockItems.length - 1); }
  showHideHeader() { this.showHeader = !this.showHeader; }
  showHideInfoAdditional() { this.showInfoAdditional = !this.showInfoAdditional; }
  showHideActions() { this.showActions = !this.showActions; }
  showHideBorder() { this.showBorder = !this.showBorder; }
}