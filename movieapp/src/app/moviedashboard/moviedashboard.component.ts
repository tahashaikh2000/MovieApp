import { Component, OnInit } from '@angular/core';
import { delay, map, take } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Movie } from '../model/movie';
import { AllserviceService } from '../allservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../model/register';


@Component({
  selector: 'app-moviedashboard',
  templateUrl: './moviedashboard.component.html',
  styleUrls: ['./moviedashboard.component.css']
})
export class MoviedashboardComponent implements OnInit {
  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr!: string;



  movList :Array<Movie> = []
  // query!:string;
    movie:Movie=new Movie;

   

  constructor(private api:AllserviceService,private router:Router) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  ngOnInit(): void {

    this.getTopRatedMovies(1);
    // this.api.getAll().subscribe((data: Movie[]) => {
    //   this.movList = data;
    //   //this.api.movieTitle=
    //   console.log(this.movList);
    //})

  }

  getTopRatedMovies(page: number) {
    this.api.getTopRatedMovies(page).pipe(delay(2000)).subscribe((res: any) => {
      this.topRated = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
    error => console.log(error));
  }

  searchMovies() {
    this.api.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

  changePage(event) {
    this.loader = true;
    this.getTopRatedMovies(event.pageIndex + 1);
  }








  user:Register=new Register;
  searchtitle: string = '';

  addFav(movie:any){
    console.log("in movie_dashboard");
    console.log(movie);
    console.log("emailid"+this.user.emailId);
       this.api.addFav(this.user.emailId,movie).subscribe((data: any)=>{

       console.log(data);
       alert("movie added to favList");
       console.log("inside emailid"+this.user.emailId);
    })

   
    
  }

  search(){
    console.log(this.searchtitle);
    // this.api.search(this.searchtitle).subscribe(data=>{
    //  console.log("value"+data);

    // },err=>{
    //   "not found"
    // })

  }


  


}



