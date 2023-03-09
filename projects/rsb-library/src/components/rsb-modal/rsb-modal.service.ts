import { Injectable } from '@angular/core';
import { RsbModalComponent } from './rsb-modal.component';

@Injectable({
  providedIn: 'root'
})
export class RsbModalService
{

  private modals:RsbModalComponent[];

  constructor()
  {
    this.modals = [];
  }

  add(modal:RsbModalComponent)
  {
    if(!this.modals.find(m => m.id === modal.id))
    {
      this.modals.push(modal);
    }
  }
  
  remove(id:string)
  {
    this.modals = this.modals.filter(m => m.id != id);
  }

  open(id:string)
  {
    const modal = this.modals.find(x => x.id == id);
    // console.log(id)
    if(modal)
    {
      modal.show = true;
    }
    else 
    {
      console.error("Modal not exists");
    }
    // console.log(modal);
    // console.log(modal.show);
    // console.log(this.modals);
  }

  close(id:string)
  {
    const modal = this.modals.find(x => x.id == id);
    if(modal)
    {
      modal.show = false;
    }
    else 
    {
      console.error("Modal not exists");
    }
  }

}
