import { NgModule,
         Optional,
         SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  JwtTokenInterceptorService,
  CurrentUserService,
} from '@app/core/services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    CurrentUserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptorService,
      multi: true,
    },
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded.
                       Import Core modules in the AppModule only.`);
    }
  }
}
