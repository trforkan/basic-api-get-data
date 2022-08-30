import { MovieService } from './service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'api-call';

  movies: any;

  movieType: string = 'popular';

  constructor(private movieService: MovieService){

  }

  ngOnInit() {
    this.movieService.getMovies(this.movieType).subscribe((response) => {
      this.movies=response;
      console.log(this.movies);
    });

  }


  display(event: string) {
    this.movieType = event;
    console.log(this.movieType);
    this.movieService.getMovies(this.movieType).subscribe((response) => {
      this.movies=response;
      console.log(this.movies);
    });
  }



}
