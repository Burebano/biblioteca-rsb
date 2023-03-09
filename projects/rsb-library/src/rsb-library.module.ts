import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsbJoinPipeModule } from './pipes/rsb-join-pipe/rsb-join-pipe.module';
import { RsbSpinnerModule } from './components/rsb-spinner/rsb-spinner.module';
import { RsbToastModule } from './components/rsb-toast/rsb-toast.module';
import { RsbConstantsService } from './services/rsb-constants.service';
import { ClickOutsideModule } from './directives/rsb-click-outside/rsb-click-outside.module';
import { RsbDropdownModule } from './components/rsb-dropdown/rsb-dropdown.module';
import { RsbConfigModule } from './services/rsb-config/rsb-config.module';
import { RsbDetailModule } from './components/rsb-detail/rsb-detail.module';
import { RsbTabsModule } from './components/rsb-tabs/rsb-tabs.module';
import { RsbResolutionModule } from './services/rsb-resolution/rsb-resolution.module';
import { RsbNgModelBaseModule } from './components/rsb-ng-model-base/rsb-ng-model-base.module';
import { RsbLoadIframeModule } from './directives/rsb-load-iframe/rsb-load-iframe.module';
import { RsbBlockListModule } from './components/rsb-block-list/rsb-block-list.module';
import { RsbAccordionModule } from './components/rsb-accordion/rsb-accordion.module';
import { RsbTranslateModule } from './services/rsb-translate/rsb-translate.module';
import { RsbToggleModule } from './components/rsb-toggle/rsb-toggle.module';
import { RsbModalModule } from './components/rsb-modal/rsb-modal.module';
import { RsbThemeService } from './services/rsb-theme.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RsbJoinPipeModule, 
    RsbSpinnerModule,
    RsbToastModule,
    ClickOutsideModule,
    RsbDropdownModule,
    RsbConfigModule,
    RsbDetailModule,
    RsbTabsModule,
    RsbResolutionModule,
    RsbNgModelBaseModule,
    RsbLoadIframeModule,
    RsbBlockListModule,
    RsbAccordionModule,
    RsbTranslateModule,
    RsbToggleModule,
    RsbModalModule
  ],
  exports: [
    RsbJoinPipeModule, 
    RsbSpinnerModule,
    RsbToastModule,
    ClickOutsideModule,
    RsbDropdownModule,
    RsbConfigModule,
    RsbDetailModule,
    RsbTabsModule,
    RsbResolutionModule,
    RsbNgModelBaseModule,
    RsbLoadIframeModule,
    RsbBlockListModule,
    RsbAccordionModule,
    RsbTranslateModule,
    RsbToggleModule,
    RsbModalModule
  ],
  providers: [
    RsbConstantsService, 
    RsbThemeService
  ]
})
export class RsbLibraryModule { }
