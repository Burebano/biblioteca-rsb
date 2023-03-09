import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { RsbCacheService } from '../services/rsb-cache.service';
import { RsbDetailComponent } from '../../../projects/rsb-library/src/components/rsb-detail/rsb-detail.component';
import { RsbConfigService } from '../../../projects/rsb-library/src/services/rsb-config/rsb-config.service';
import { cloneDeep } from 'lodash-es';
import { Router } from '@angular/router';
import { RsbModalService } from '../../../projects/rsb-library/src/components/rsb-modal/rsb-modal.service';
import { RsbConstantsService } from '../../../projects/rsb-library/src/services/rsb-constants.service';
import { RsbSelectItem } from '../../../projects/rsb-library/src/common/rsb-select-item';
import { RsbThemeService } from '../../../projects/rsb-library/src/services/rsb-theme.service';

@Component({
  selector: 'rsb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent
{

  public menuItemsOriginal:any[];
  public menuItemsFiltered:any[];
  public showMenuItems:boolean;
  public themes:RsbSelectItem[];

  @ViewChild(RsbDetailComponent, {static:false}) detail:RsbDetailComponent;
  @ViewChild("main") main:ElementRef;

  constructor(public rsbCache:RsbCacheService, public rsbConfig:RsbConfigService, private router:Router, private rsbModal:RsbModalService, public constants:RsbConstantsService, private themeService:RsbThemeService)
  {
    this.showMenuItems = false;
    this.menuItemsOriginal = this.rsbConfig.getData('menuItems');
    this.menuItemsFiltered = cloneDeep(this.menuItemsOriginal);
    this.themes = [
      new RsbSelectItem('Default', this.constants.RsbThemeConstants.THEME_DEFAULT),
      new RsbSelectItem('Dark', this.constants.RsbThemeConstants.THEME_DARK)      
    ];
    // console.log(this.menuItemsOriginal);
  }

  clickLogo()
  {
    this.closeDetail(); 
    this.router.navigateByUrl('rsb-get-started');
  }

  openCloseMenu()
  {
    if(this.showMenuItems)
    {
      this.closeDetail();
    }
    else 
    {
      this.main.nativeElement.scrollTo({top: 0});
      this.main.nativeElement.style.overflowY = 'hidden';
      this.showMenuItems = !this.showMenuItems;
    }
  }

  openTheme()
  {
    this.rsbModal.open('modal-theme');
  }

  changeTheme($event:RsbSelectItem)
  {
    this.rsbModal.close('modal-theme');
    this.themeService.changeTheme($event.value);
  }

  closeDetail()
  {
    if(this.detail)
    {
      this.detail.closeDetail(); 
    }
    setTimeout(() => {
      this.main.nativeElement.style.overflowY = 'auto';
      this.menuItemsFiltered = this.menuItemsOriginal;
      this.showMenuItems = false;
    }, 600);
  }

  filterMenuItems($event)
  {
    if(!$event.target.value)
    {
      console.log('if');
      console.log(this.menuItemsOriginal);
      this.menuItemsFiltered = this.menuItemsOriginal;
    }
    else 
    {
      console.log('else');
      this.menuItemsFiltered = cloneDeep(this.menuItemsOriginal).filter(mi => {
        mi.children = mi.children.filter(m => m.text.toLowerCase().includes($event.target.value.toLowerCase()));
        return mi.children.length > 0;
      });
    }
  }

  goToRoute(route:string)
  {
    this.router.navigateByUrl(route);
    this.closeDetail();
  }

}
