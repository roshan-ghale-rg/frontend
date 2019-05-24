import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedService} from '../../services/shared.service';

const routes: Routes = [{
  path: '', children: [
    {
      path: 'profit',
      loadChildren: './analysis/analysis.module#AnalysisModule',
      canActivate: [SharedService]
    }
  ]
},
  {
    path: '', children: [
      {
        path: 'search-product',
        loadChildren: './product-search/product-search.module#ProductSearchModule',
        canActivate: [SharedService]
      }
    ]
  },
  {
    path: '', children: [
      {
        path: 'product-details',
        loadChildren: './product-details/product-details.module#ProductDetailsModule',
        canActivate: [SharedService]

      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitAnalysisRoutingModule { }
