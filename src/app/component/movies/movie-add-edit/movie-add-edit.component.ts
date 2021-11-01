import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../../../Models/movie';
import { DataService } from '../../../Service/data.service';
import { addMovies, getMovies, editMovies } from '../../../Store/Actions/movie.action';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'movie-add-edit',
  templateUrl: './movie-add-edit.component.html',
  styleUrls: ['./movie-add-edit.component.css']
})
export class MovieAddEditComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  title = 'ngrx-Movie-Cruds';
  id :any = '';
  movie: any;

  constructor(
    private dataService: DataService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      });
      if(this.id){
        this.route.queryParamMap.subscribe(
          (params: any)  => {
            console.log('params',params);
            let movie = JSON.parse(params.params['movie1']);
            console.log('this.movie ',movie );
            this.movie = movie;
            this.newMovie['name'] = this.movie['name'];
            this.newMovie['earning'] = this.movie['earning'];
            this.newMovie['releaseDate'] = this.movie['releaseDate'];
            this.newMovie['userName'] = this.movie['userName'];
            this.newMovie['id'] = this.movie['id'];
          }
          ); 
      }
  }

  addNewMovies(): void {
    // console.log('Math.random',Math.floor(Math.random() * 10000));
    // this.newMovie.id = Math.floor(Math.random() * 10000);
    if(!this.id){
      this.store.dispatch(addMovies(this.newMovie));
    }else{
      this.store.dispatch(editMovies(this.newMovie));
    }
    this.newMovie = new Movie();
    this.router.navigate(['/movie/list']);
    // this.dataService.addMovies(this.newMovie).subscribe((res) => {
    //   this.getAllMovies();
    //   this.newMovie = new Movie();
    // });
  }
  
}
