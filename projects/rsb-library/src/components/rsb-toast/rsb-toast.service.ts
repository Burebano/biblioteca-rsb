import { Injectable } from '@angular/core';
import { RsbToast } from './bean/rsb-toast';
import { RsbConstantsService } from '../../services/rsb-constants.service';

@Injectable({providedIn: 'root'})

export class RsbToastService {

  private _toasts:RsbToast[];
  private _timeout:number;

  public get toasts():RsbToast[]
  {
    console.log('get toasts');
    return this._toasts;
  }

  public get timeout():number
  {
    return this._timeout;
  }

  public set timeout(value:number)
  {
    this._timeout = value;
  }

  constructor(private constants:RsbConstantsService) {
    this._toasts = [];
    this._timeout = this.constants.RsbToastConstants.TIMEOUT;
  }

  addInfoMessage(title:string, message:string)
  {
    console.log('addInfoMessage');
    this.addMessage(title, message, this.constants.RsbToastConstants.TYPE_INFO);
  }
  addWarningMessage(title:string, message:string)
  {
    this.addMessage(title, message, this.constants.RsbToastConstants.TYPE_WARNING);
  }
  addErrorMessage(title:string, message:string)
  {
    this.addMessage(title, message, this.constants.RsbToastConstants.TYPE_ERROR);
  }
  addSuccessMessage(title:string, message:string)
  {
    this.addMessage(title, message, this.constants.RsbToastConstants.TYPE_SUCCESS);
  }

  private addMessage(title:string, message:string, type:string)
  {
    let toast:RsbToast = new RsbToast(title, message, type);
    this._toasts.push(toast);
    setTimeout(() => {
      this.closeToast(toast);
    }, this._timeout);
  }

  closeToast(toast:RsbToast)
  {
    let index:number = this._toasts.findIndex(t => t === toast);
    if(index !== -1)
    {
      this._toasts.splice(index, 1);
    }
  }

}
