import { Injectable } from '@angular/core';
import { RsbConstantsService } from '../rsb-constants.service';

@Injectable({
  providedIn: 'root'
})
export class RsbResolutionService {

  private _size: string;

  public get size(): string {
    return this._size;
  }
  public set size(value: string) {
    this._size = value;
  }

  constructor(private constants:RsbConstantsService) { }

  setSize(width:number)
  {
    if(width >= this.constants.RsbResolutionConstants.MOBILE_MIN && width < this.constants.RsbResolutionConstants.MOBILE_MAX)
    {
      this._size = this.constants.RsbResolutionConstants.MOBILE;
    }
    else if(width >= this.constants.RsbResolutionConstants.TABLET_MIN && width < this.constants.RsbResolutionConstants.TABLET_MAX)
    {
      this._size = this.constants.RsbResolutionConstants.TABLET;
    }
    else if(width >= this.constants.RsbResolutionConstants.WEB_MIN && width < this.constants.RsbResolutionConstants.WEB_MAX)
    {
      this._size = this.constants.RsbResolutionConstants.WEB;
    }
  }

}
