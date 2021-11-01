import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from './Models/movie';
import { DataService } from './Service/data.service';
import { addMovies, getMovies } from './Store/Actions/movie.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'ngrx-Movie-Cruds';

  constructor(private dataService: DataService, private store: Store) {}

  
  ngOnInit(): void {
    this.getAllMovies();
    console.log(window.navigator.userAgent);
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }

  addNewMovies(): void {
    // console.log('Math.random',Math.floor(Math.random() * 10000));
    // this.newMovie.id = Math.floor(Math.random() * 10000);
    this.store.dispatch(addMovies(this.newMovie));
    this.newMovie = new Movie();
    // this.dataService.addMovies(this.newMovie).subscribe((res) => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }
  
}
