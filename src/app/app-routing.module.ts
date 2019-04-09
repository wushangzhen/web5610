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
import {AuthGuard} from './services/auth-guard.service';
// const routes: Routes = [];

  const routes: Routes = [ 
      {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: 'profile/:uid', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website' , component: WebsiteListComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid/page', component: PageListComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid', component: WebsiteEditComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid/page/:pid', component: PageEditComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, canActivate: [AuthGuard]},
      { path: 'usr/:uid/website/:wid/page/:pid/widget/:wgid/example/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  export const routing = RouterModule.forRoot(routes, {useHash: true});
