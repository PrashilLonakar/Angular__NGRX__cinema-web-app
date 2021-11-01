import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../Service/data.service'; 
import { Store,select } from '@ngrx/store';
import { Movie } from '../../../Models/movie';
import { MovieState } from '../../../Store/Reducers/movie.reducer';
import {
  greater,
  movieSelector,
  movieUserSelector,
} from '../../../Store/selectors/movie.selector';
import { addMovies, getMovies ,deleteMovies } from '../../../Store/Actions/movie.action';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies$ = this.store.pipe(select(greater(1000)));
  constructor(
    private dataService: DataService,
    private store: Store<MovieState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllMovies();
    setTimeout(() => {
      this.movies$ = this.store.pipe(select(greater(2000)));
    }, 5000);
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    // this.dataService.getMovies().subscribe((movies: Movie[]) => {
    //   this.movies = movies;
    // });
  }

  onEdit(movie: any){
    console.log('movie',movie);
    this.router.navigate(['/movie/edit',movie.id], { queryParams: { movie1: JSON.stringify(movie) } });
  }

  onDelete(id: any){
    this.store.dispatch(deleteMovies(id));
    this.movies$ 
  }

}
