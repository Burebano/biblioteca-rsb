import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class RsbSpinnerService {

  private _show?:boolean;

  constructor() { }

  public get show():boolean{
    return this._show;
  }

  public set show(value:boolean){
    this._show = value;
  }

  showSpinner(){
    this._show = true;
    console.log(this._show);
  }   

  hideSpinner(){
    this._show = false;
    console.log(this._show);
  }

}
