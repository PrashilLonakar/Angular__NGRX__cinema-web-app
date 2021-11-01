import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';
//import { Actions } from '@ngrx/store-devtools/src/reducer';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  mergeMap,
  map,
  tap,
} from 'rxjs/operators';
import {
  getMovies,
  getMoviesSuccess,
  addMovies,
  addMoviesSuccess,
  editMovies,
  editMoviesSuccess,
  deleteMovies,
  deleteMoviesSuccess,
} from '../Actions/movie.action';

@Injectable()
export class MovieEffects {
  constructor(private action$: Actions, private dataService: DataService) {}
  error: any;

  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies))
          //catchError(() => EmptyError)
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMovies),
      tap((movie) => console.log(movie)),
      concatMap(({ movie }) =>
        this.dataService.addMovies(movie).pipe(
          map((newMovie) => addMoviesSuccess(newMovie))
          //   ,
          //   catchError(() => EmptyError)
        )
      )
    )
  );

  editMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(editMovies),
      tap((movie) => console.log(movie)),
      concatMap(({ movie }) =>
        this.dataService.editMovies(movie).pipe(
          map((newMovie) => editMoviesSuccess(newMovie))
          //   ,
          //   catchError(() => EmptyError)
        )
      )
    )
  );

  deleteMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteMovies),
      mergeMap(({ movie }) =>
        this.dataService.deleteMovies(movie.id).pipe(
          map(() => deleteMoviesSuccess(movie.id))
          //   ,
          //   catchError(() => EmptyError)
        )
      )
    )
  );
}
