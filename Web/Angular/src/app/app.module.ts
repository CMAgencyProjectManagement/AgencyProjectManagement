import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
];

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';

const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV,
];

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES,
  TruncateTextPipe
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES,
  // TruncateTextPipe
];

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import provider
import {AlwaysAuthGuard} from './services/auth.guard'
import {StoreService} from './services/tree.service';
import {WebsocketService} from './services/websocket.service';
import {NavService} from './services/nav.service';
import {UserService} from './services/user.service';
import {ProjectService} from './services/project.service';
import {TeamService} from './services/team.service';
import {TaskService} from './services/task.service';
import {DependencyService} from './services/dependency.service';
import {PagerService} from './services/pager.service';
import {UploadService} from './services/upload.service';
import {ListService} from 'app/services/list.service';
const SERVICES = [
  AlwaysAuthGuard,
  StoreService,
  WebsocketService,
  NavService,
  UserService,
  ProjectService,
  TeamService,
  TaskService,
  DependencyService,
  PagerService,
  UploadService,
  ListService
];

// Import modal
import {
  SuccessModalComponent,
  ErrorModalComponent,
  CreateListModalComponent,
  ConfirmModalComponent
} from './cmaComponents/modals';

const MODALS = [
  SuccessModalComponent,
  ErrorModalComponent,
  CreateListModalComponent,
  ConfirmModalComponent
];

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {MyDatePickerModule} from 'mydatepicker';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {ModalModule} from 'ngx-bootstrap';
import {CmaModule} from './cmaComponents/cma.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    MyDatePickerModule,
    AngularMultiSelectModule,
    ModalModule.forRoot(),
    CmaModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    ...SERVICES
  ],
  entryComponents: [
    ...MODALS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
