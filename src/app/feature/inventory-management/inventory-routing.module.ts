import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

const routes: Routes = [{
  path: '', children: [
    {
      path: 'home',
     loadChildren: './home/home.module#HomeModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
