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
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.movies$ = this.store.pipe(select(greater(2000)));
    }, 5000);
  }

}
