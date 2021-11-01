import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddEditComponent } from './movie-add-edit/movie-add-edit.component';


const routes: Routes = [
  {
    path: "",
    children: [
      { 
        path: "",
        redirectTo: "list",
        pathMatch: "full" },
      {
        path: "list",
        component: MovieListComponent,
        data: { title: "Movie List" }
      },
      {
        path: "add",
        component: MovieAddEditComponent,
        data: { title: "Add-Movie", type: "add" }
      },
      {
        path: "edit/:id",
        component: MovieAddEditComponent,
        data: { title: "Edit-Movie", type: "edit" }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
