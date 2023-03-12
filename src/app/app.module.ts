import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RsbLibraryModule } from '../../projects/rsb-library/src/rsb-library.module';
import { ShowcaseRsbJoinPipeComponent } from './showcase/showcase-rsb-join-pipe/showcase-rsb-join-pipe.component';
import { ShowcaseRsbSpinnerComponent } from './showcase/showcase-rsb-spinner/showcase-rsb-spinner.component';
import { ShowcaseRsbToastComponent } from './showcase/showcase-rsb-toast/showcase-rsb-toast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowcaseClickOutsideComponent } from './showcase/showcase-rsb-click-outside/showcase-rsb-click-outside.component';
import { ShowcaseRsbDropdownComponent } from './showcase/showcase-rsb-dropdown/showcase-rsb-dropdown.component';
import { ShowcaseRsbConfigComponent } from './showcase/showcase-rsb-config/showcase-rsb-config.component';
import { RsbConfigService } from '../../projects/rsb-library/src/services/rsb-config/rsb-config.service';
import { ShowcaseRsbDetailComponent } from './showcase/showcase-rsb-detail/showcase-rsb-detail.component';
import { ShowcaseRsbTabsComponent } from './showcase/showcase-rsb-tabs/showcase-rsb-tabs.component';
import { ShowcaseRsbResolutionComponent } from './showcase/showcase-rsb-resolution/showcase-rsb-resolution.component';
import { FormsModule } from '@angular/forms';
import { ShowcaseRsbLoadIframeComponent } from './showcase/showcase-rsb-load-iframe/showcase-rsb-load-iframe.component';
import { ShowcaseRsbBlockListComponent } from './showcase/showcase-rsb-block-list/showcase-rsb-block-list.component';
import { ShowcaseRsbAccordionComponent } from './showcase/showcase-rsb-accordion/showcase-rsb-accordion.component';
import { RsbTranslateService } from '../../projects/rsb-library/src/services/rsb-translate/rsb-translate.service';
import { ShowcaseRsbTranslateComponent } from './showcase/showcase-rsb-translate/showcase-rsb-translate.component';
import { ShowcaseRsbToggleComponent } from './showcase/showcase-rsb-toggle/showcase-rsb-toggle.component';
import { ShowcaseRsbModalComponent } from './showcase/showcase-rsb-modal/showcase-rsb-modal.component';
import { MenuComponent } from './menu/menu.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BaseShowcaseComponent } from './showcase/base-showcase/base-showcase.component';

export function configFactory(provider:RsbConfigService) 
{
  return () => provider.getDataFromJSON('assets/config/data.json');
}

export function translateFactory(provider:RsbTranslateService) 
{
  return () => provider.getData('assets/i18n/');
}

@NgModule({
  declarations: [		
    AppComponent,
    ShowcaseRsbJoinPipeComponent, 
    ShowcaseRsbSpinnerComponent,
    ShowcaseRsbToastComponent,
    ShowcaseClickOutsideComponent,
    ShowcaseRsbDropdownComponent,
    ShowcaseRsbConfigComponent,
    ShowcaseRsbDetailComponent,
    ShowcaseRsbTabsComponent,
    ShowcaseRsbResolutionComponent,
    ShowcaseRsbLoadIframeComponent,
    ShowcaseRsbBlockListComponent,
    ShowcaseRsbAccordionComponent,
    ShowcaseRsbTranslateComponent,
    ShowcaseRsbToggleComponent,
    ShowcaseRsbModalComponent,
    MenuComponent,
    GetStartedComponent,
    BaseShowcaseComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RsbLibraryModule,
    FormsModule,
    CodeHighlighterModule
  ],
  providers: [
    RsbConfigService, 
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps:[RsbConfigService],
      multi: true
    },
    RsbTranslateService, 
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps:[RsbTranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
