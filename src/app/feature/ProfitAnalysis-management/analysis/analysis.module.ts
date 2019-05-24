import { NgModule } from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProfitComponent} from './component/profit.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [ProfitComponent],
  imports: [
    SharedModule,
    ChartsModule,
    RouterModule.forChild([{
      path: '',
      component: ProfitComponent
    }])
  ]

})
export class AnalysisModule { }
