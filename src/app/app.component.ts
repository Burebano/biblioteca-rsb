import { Component } from '@angular/core';
import { RsbThemeService } from '../../projects/rsb-library/src/services/rsb-theme.service';
import { RsbConstantsService } from '../../projects/rsb-library/src/services/rsb-constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'biblioteca-rsb';
  constructor(public themeService:RsbThemeService, public contstants:RsbConstantsService)
  {
    // this.themeService.changeTheme(this.contstants.RsbThemeConstants.THEME_DARK);
    this.themeService.changeTheme(this.contstants.RsbThemeConstants.THEME_DEFAULT);
  }
}
