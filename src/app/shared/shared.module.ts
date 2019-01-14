import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { SongsComponent } from '@app/shared/components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule,
  ],
  exports: [
    TabsModule,
    SongsComponent,
  ],
  declarations: [
    SongsComponent,
  ],
})
export class SharedModule { }
