import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReviewManagementComponent } from './component/review-management.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ReviewManagementComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: ReviewManagementComponent
    }])
  ]
})
export class ReviewManagementModule { }
