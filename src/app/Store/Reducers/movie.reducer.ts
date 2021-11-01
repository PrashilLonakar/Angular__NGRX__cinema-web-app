import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import { addMovies, addMoviesSuccess ,getMovies, getMoviesSuccess } from '../Actions/movie.action';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
  user: Readonly<string>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, { movies }) => [...movies]),
  on(addMoviesSuccess, (state, {movie}) => [...state, movie])
);

function mockMovies(): Movie[] {
    const movie = new Movie(
        'Avenger: Endgame',
        2345,
        new Date('26 Apr, 2019 05:30:00')
    );
    movie.id = 1;


    const movie1 = new Movie(
        'Avengers: Infinity War',
        2048,
        new Date('27 Apr, 2018 05:30:00')
    );
    movie1.id = 2;
    
    const movie2 = new Movie(
        'Age of Ultron',
        1403,
        new Date('01 May, 2015 05:30:00')
    );
    movie2.id = 3;
    
  const movies = [movie, movie1, movie2];
  return movies;
}