  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Favourites } from './model/favourite';
  import { Movie } from './model/movie';
import { Register } from './model/register';

  @Injectable({
    providedIn: 'root'
  })
  export class AllserviceService {
    baseUrl: string;
    apiKey: string;
    language: string;
    region: string;

    userRegister(register: Register) {
      throw new Error('Method not implemented.');
    }
    loginStatus = false;
    loginUrl = '';
    checkLogin() {
      this.loginStatus = true;
    }

    constructor(private http:HttpClient) {
      this.baseUrl = 'https://api.themoviedb.org/3/';
      this.apiKey = 'dd4d819639705d332d531217b4f7c6b6'; /// paste our API Key Jai thalapathi Says
      this.language = 'en-US';
      this.region = 'US';
     }
    loginEmail:any;
    // movieTitle:any;
    // data:Movie=new Movie;

    
    getNowPlaying(page: number): Observable<any> {
      // tslint:disable-next-line: max-line-length
      return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }

    getTopRatedMovies(page: number): Observable<any> {
      // tslint:disable-next-line: max-line-length
      return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }

    searchMovies(searchStr: string): Observable<any> {
      return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`);
    }

    getPopular(page: number): Observable<any> {
      // tslint:disable-next-line: max-line-length
      return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
  
    getUpComingMovies(page: number): Observable<any> {
      // tslint:disable-next-line: max-line-length
      return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
    }
  
    getDiscoverMovies(): Observable<any> {
      return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}`);
    }
  
    getGenres(): Observable<any> {
      return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);
    }
  
    getMoviesByGenre(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`);
    }
  
    getMovie(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
    }
  
    getMovieReviews(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}`);
    }
  
    getMovieCredits(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`);
    }
  
    getBackdropsImages(id: string) {
      return this.http.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`);
    }
  
    getMovieVideos(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`);
    }
  
    getRecomendMovies(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`);
    }
  
    getPersonDetail(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`);
    }
  
    getPersonExternalData(id: string) {
      return this.http.get(`${this.baseUrl}person/${id}/external_ids?api_key=${this.apiKey}`);
    }
  
    getPersonCast(id: string): Observable<any> {
      return this.http.get(`${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`);
    }
  

    saveUser(user:any){
      return this.http.post("http://localhost:8086/api/v1/registeruserimg/user",user);
    }

    loginUser(user:any){
      return this.http.post("http://localhost:8085/api/v2/login",user)
    }
    getAll():Observable<Array<Movie>>{
      return this.http.get<Array<Movie>>("http://localhost:8086/api/v1/movie/getAll");
    }

    addFav(emailId:string,data:Movie){
      console.log("value");
      console.log(this.loginEmail);
      console.log(data);
      return this.http.post("http://localhost:8088/api/v4/fav/addFav/"+this.loginEmail,data);
    }

    getAllFav(emailId:string):Observable<Array<Favourites>>{
      return this.http.get<Array<Favourites>>("http://localhost:8088/api/v4/fav/getAll/"+this.loginEmail);
    }

    search(title:string){
      console.log(title);
      return this.http.get('http://localhost:8087/api/v3/searchtitle/'+title)
    }


  }
