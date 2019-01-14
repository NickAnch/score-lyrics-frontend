import { NgModule } from '@angular/core';
import { Routes,
         RouterModule,
} from '@angular/router';
import { HomeViewComponent } from '@app/layout/views/home/home.view';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeViewComponent,
      },
      {
        path: 'songs',
        loadChildren: './song/song.module#SongModule',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
