import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';
import { HomeViewComponent } from '@app/layout/views/home/home.view';
import { ProfileResolver } from '@app/profile/resolvers/profile.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      profile: ProfileResolver,
    },
    children: [
      {
        path: '',
        component: HomeViewComponent,
      },
      {
        path: 'songs',
        loadChildren: './song/song.module#SongModule',
      },
      {
        path: 'users',
        loadChildren: './user/user.module#UserModule',
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProfileResolver],
})
export class AppRoutingModule { }
