import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { SongsComponent } from '@app/shared/components';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatBadgeModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    TabsModule,
    SongsComponent,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],
  declarations: [
    SongsComponent,
  ],
})
export class SharedModule { }
