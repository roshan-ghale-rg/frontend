import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedService } from './services/shared.service';

const routes: Routes = [

 {
  path: 'home',
  loadChildren: './common/common-view.module#CommonViewModule',
  canActivate: [SharedService]
},
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './registration/registration.module#RegistrationModule'
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
