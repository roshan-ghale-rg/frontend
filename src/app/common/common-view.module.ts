import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SharedModule } from '../shared/shared.module';
import {MatExpansionModule} from '@angular/material';


@NgModule({
  declarations: [ HeaderComponent,
    SideNavigationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatExpansionModule,
    RouterModule.forChild([{
      path: '',
      component: SideNavigationComponent,
      children: [
        {
          path: 'inventory',
          loadChildren: '../feature/inventory-management/inventory.module#InventoryModule'
        },
         {
          path: 'competitor',
          loadChildren: '../feature/ProfitAnalysis-management/profit-analysis.module#ProfitAnalysisModule',
         },
         {
          path: 'review',
          loadChildren: '../feature/review-management/review-management.module#ReviewManagementModule'
         },
         {
          path: 'profile',
          loadChildren: '../feature/profile/profile.module#ProfileModule'
         },
         { path: '', redirectTo: 'inventory/home', pathMatch: 'full' },
      ]
    }
    ])
  ],
  exports: [HeaderComponent,
    SideNavigationComponent]
})
export class CommonViewModule { }
