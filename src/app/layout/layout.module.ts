import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './views/home/home.view';
import {
  FilteredSongsComponent,
  HeaderComponent,
} from '@app/layout/components';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    HomeViewComponent,
    FilteredSongsComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class LayoutModule { }
