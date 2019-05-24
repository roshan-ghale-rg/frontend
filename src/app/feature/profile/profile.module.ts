import { NgModule } from '@angular/core';
import { ProfileComponent } from './component/profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: ProfileComponent
    }
    ])
  ]
})
export class ProfileModule { }
