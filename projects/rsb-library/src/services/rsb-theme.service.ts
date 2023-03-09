import { Injectable } from '@angular/core';
import { RsbConstantsService } from './rsb-constants.service';

@Injectable({
  providedIn: 'root'
})
export class RsbThemeService {

  private _theme: string;

  public get theme(): string
  {
    return this._theme;
  }
  public set theme(value: string)
  {
    this._theme = value;
  }

  private themesAvailables:string[] = [
    this.constants.RsbThemeConstants.THEME_DEFAULT,
    this.constants.RsbThemeConstants.THEME_DARK
  ];

  constructor(private constants:RsbConstantsService)
  {
    this._theme = this.constants.RsbThemeConstants.THEME_DEFAULT;
  }

  changeTheme(theme:string)
  {
    if(this.themesAvailables.find(t => t === this._theme))
    {
      this._theme = theme;
    }
    else
    {
      console.error('Theme ' + theme + ' not exists');
    }
  }

}
