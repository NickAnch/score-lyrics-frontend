import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './views/home/home.view';
import {
  FilteredSongsComponent
} from '@app/layout/components';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HomeViewComponent,
    FilteredSongsComponent,
  ],
})
export class LayoutModule { }
