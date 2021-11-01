import { createAction, props } from '@ngrx/store';
import { Movie } from '../../Models/movie';

export const getMovies = createAction('[Movie] Get movie');
export const getMoviesSuccess = createAction(
  '[Movie] Get movie success',
  (movies: ReadonlyArray<Movie>) =>  ({movies})
  //props<{movies : ReadonlyArray<Movie>}>()
  );
export const addMovies = createAction(
  '[Movie] Add movie',
  (movie: Movie) => ({movie})
  // props<{ movie: Movie }>()
);
export const addMoviesSuccess = createAction(
  '[Movie] Add movie success',
  (movie: Movie) => ({movie})
  //props<{ movie: Movie }>()
);
