import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/usr/login/login.component';
import {RegisterComponent} from './views/usr/register/register.component';
import {ProfileComponent} from './views/usr/profile/profile.component';
// const routes: Routes = [];

  const routes: Routes = [   {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  export const routing = RouterModule.forRoot(routes);
