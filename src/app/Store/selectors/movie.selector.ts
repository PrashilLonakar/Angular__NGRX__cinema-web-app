import { createFeatureSelector,createSelector } from "@ngrx/store";
import { MovieState } from "../Reducers/movie.reducer";
import { Movie } from "src/app/Models/movie";

export const movieSelector = createSelector(
    (state: MovieState) => state.movies,
    (movies: ReadonlyArray<Movie>) => movies
);

export const movieUserSelector = createSelector(
    (state: MovieState) => state.movies,
    (state: MovieState) => state.user,
    (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
      return movies.filter((movie: Movie) => movie.userName === user);
    }
  );
  
  export const greater = (amount: number) =>
    createSelector(movieSelector, (movies) => {
      return movies.filter((movie: Movie) => movie.earning >= amount);
  });
  