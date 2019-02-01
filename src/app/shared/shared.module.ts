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
<<<<<<< Updated upstream
=======
  MatCardModule,
  MatBadgeModule,
  MatTabsModule,
>>>>>>> Stashed changes
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule,
  ],
  exports: [
    TabsModule,
    SongsComponent,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
<<<<<<< Updated upstream
=======
    MatCardModule,
    MatBadgeModule,
    MatTabsModule,
>>>>>>> Stashed changes
  ],
  declarations: [
    SongsComponent,
  ],
})
export class SharedModule { }
