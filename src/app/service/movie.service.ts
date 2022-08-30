import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = "https://api.themoviedb.org/3/movie/";
  apiKey = "?api_key=4972464e7c5458ebaaf29cb554132bd6";

  constructor(private http: HttpClient) { }

  getMovies(event: string){
    return this.http.get(`${this.baseUrl}${event}${this.apiKey}`);
  }
}
