import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {SearchProductComponent} from './component/search-product.component';
import {MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import {SharedService} from '../../../services/shared.service';
@NgModule({
  declarations: [SearchProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{
      path: '',
      component: SearchProductComponent,
      canActivate: [SharedService],
    }])
  ]
})
export class ProductSearchModule { }
