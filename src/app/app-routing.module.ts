import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseRsbExampleComponent } from './showcase/showcase-rsb-example/showcase-rsb-example.component';
import { ShowcaseRsbJoinPipeComponent } from './showcase/showcase-rsb-join-pipe/showcase-rsb-join-pipe.component';
import { ShowcaseRsbSpinnerComponent } from './showcase/showcase-rsb-spinner/showcase-rsb-spinner.component';
import { ShowcaseRsbToastComponent } from './showcase/showcase-rsb-toast/showcase-rsb-toast.component';
import { ShowcaseClickOutsideComponent } from './showcase/showcase-rsb-click-outside/showcase-rsb-click-outside.component';
import { ShowcaseRsbDropdownComponent } from './showcase/showcase-rsb-dropdown/showcase-rsb-dropdown.component';
import { ShowcaseRsbConfigComponent } from './showcase/showcase-rsb-config/showcase-rsb-config.component';
import { ShowcaseRsbDetailComponent } from './showcase/showcase-rsb-detail/showcase-rsb-detail.component';
import { ShowcaseRsbTabsComponent } from './showcase/showcase-rsb-tabs/showcase-rsb-tabs.component';
import { ShowcaseRsbResolutionComponent } from './showcase/showcase-rsb-resolution/showcase-rsb-resolution.component';
import { ShowcaseRsbLoadIframeComponent } from './showcase/showcase-rsb-load-iframe/showcase-rsb-load-iframe.component';
import { ShowcaseRsbBlockListComponent } from './showcase/showcase-rsb-block-list/showcase-rsb-block-list.component';
import { ShowcaseRsbAccordionComponent } from './showcase/showcase-rsb-accordion/showcase-rsb-accordion.component';
import { ShowcaseRsbTranslateComponent } from './showcase/showcase-rsb-translate/showcase-rsb-translate.component';
import { ShowcaseRsbToggleComponent } from './showcase/showcase-rsb-toggle/showcase-rsb-toggle.component';
import { ShowcaseRsbModalComponent } from './showcase/showcase-rsb-modal/showcase-rsb-modal.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {path: 'rsb-example', component: ShowcaseRsbExampleComponent},
  {path: 'rsb-join', component: ShowcaseRsbJoinPipeComponent},
  {path: 'rsb-spinner', component: ShowcaseRsbSpinnerComponent},
  {path: 'rsb-toast', component: ShowcaseRsbToastComponent},
  {path: 'rsb-outside', component: ShowcaseClickOutsideComponent},
  {path: 'rsb-dropdown', component: ShowcaseRsbDropdownComponent},
  {path: 'rsb-config', component: ShowcaseRsbConfigComponent},
  {path: 'rsb-detail', component: ShowcaseRsbDetailComponent},
  {path: 'rsb-tabs', component: ShowcaseRsbTabsComponent},
  {path: 'rsb-resolution', component: ShowcaseRsbResolutionComponent},
  {path: 'rsb-load-iframe', component: ShowcaseRsbLoadIframeComponent},
  {path: 'rsb-block-list', component: ShowcaseRsbBlockListComponent},
  {path: 'rsb-accordion', component: ShowcaseRsbAccordionComponent},
  {path: 'rsb-translate', component: ShowcaseRsbTranslateComponent},
  {path: 'rsb-toggle', component: ShowcaseRsbToggleComponent},
  {path: 'rsb-modal', component: ShowcaseRsbModalComponent},
  {path: 'rsb-get-started', component: GetStartedComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'rsb-get-started'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
