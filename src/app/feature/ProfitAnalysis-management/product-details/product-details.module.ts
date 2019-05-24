import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './component/product-details.component';
import {SharedModule} from '../../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {ChartsModule} from 'ng2-charts';
import {StorageServiceModule} from 'angular-webstorage-service';
import {MatDialogModule, MatDialogRef, MatIconModule, MatProgressSpinnerModule, MatTooltipModule} from '@angular/material';
import { KeywordDialogComponent } from './keyword-dialog/keyword-dialog.component';

@NgModule({
  declarations: [ProductDetailsComponent, KeywordDialogComponent],
  imports: [
    SharedModule,
    ChartsModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    StorageServiceModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{
      path: '',
      component: ProductDetailsComponent,
      canActivate: [SharedService],
    }])
  ],
  entryComponents: [KeywordDialogComponent]
})
export class ProductDetailsModule { }
