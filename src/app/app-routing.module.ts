import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesModule } from './component/movies/movies.module';

const appRoutes: Routes = [
  { path: '', redirectTo:'movie', pathMatch: 'full'},
  { 
    path: 'movie', 
    loadChildren: () => import('../app/component/movies/movies.module').then(m => m.MoviesModule) 
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
