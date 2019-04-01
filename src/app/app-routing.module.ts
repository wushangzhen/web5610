import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/usr/login/login.component';
import {RegisterComponent} from './views/usr/register/register.component';
import {ProfileComponent} from './views/usr/profile/profile.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {PageListComponent} from './views/pages/page-list/page-list.component';
import {WebsiteNewComponent} from './views/website/website-new/website-new.component';
import {WebsiteEditComponent} from './views/website/website-edit/website-edit.component';
import {PageNewComponent} from './views/pages/page-new/page-new.component';
import {PageEditComponent} from './views/pages/page-edit/page-edit.component';
import {WidgetListComponent} from './views/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './views/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './views/widget/widget-edit/widget-edit.component';
import {FlickrImageSearchComponent} from './views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

// const routes: Routes = [];

  const routes: Routes = [ 
      {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    {path: 'profile/:uid', component: ProfileComponent},
      { path: 'usr/:uid/website' , component: WebsiteListComponent},
      { path: 'usr/:uid/website/:wid/page', component: PageListComponent},
      { path: 'usr/:uid/website/new', component: WebsiteNewComponent},
      { path: 'usr/:uid/website/:wid', component: WebsiteEditComponent},
      { path: 'usr/:uid/website/:wid/page/new', component: PageNewComponent},
      { path: 'usr/:uid/website/:wid/page/:pid', component: PageEditComponent},
      { path: 'usr/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent},
      { path: 'usr/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent},
      { path: 'usr/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent},
      { path: 'usr/:uid/website/:wid/page/:pid/widget/:wgid/example/flickr', component: FlickrImageSearchComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  export const routing = RouterModule.forRoot(routes);
