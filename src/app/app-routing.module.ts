import { NgModule } from '@angular/core';
import { Routes,
         RouterModule,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
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
