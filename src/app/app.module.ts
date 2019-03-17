import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/usr/login/login.component';
import { RegisterComponent } from './views/usr/register/register.component';
import { ProfileComponent } from './views/usr/profile/profile.component';
import { WebsiteEditComponent } from './views/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './views/website/website-new/website-new.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { PageNewComponent } from './views/pages/page-new/page-new.component';
import { PageEditComponent } from './views/pages/page-edit/page-edit.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';
import { WidgetChooserComponent } from './views/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './views/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './views/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './views/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './views/widget/widget-edit/widget-youtube/widget-youtube.component';
import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';

import {routing} from './app-routing.module';
import {SharedService} from './services/shared.service';
import { SortableDirective } from './sortable.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteEditComponent,
    WebsiteNewComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    SortableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
      HttpClientModule,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
