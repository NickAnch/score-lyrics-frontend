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
  MatListModule,
  MatIconModule,
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
    MatListModule,
    MatIconModule,
  ],
  declarations: [
    SongsComponent,
  ],
})
export class SharedModule { }
