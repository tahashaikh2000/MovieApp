import { Component,  ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { delay, map, shareReplay } from 'rxjs/operators';
import { AllserviceService } from '../allservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  nowPlaying: any;
  tvShows: any;
  responsiveOptions;
  loader = true;

  constructor(private movies: AllserviceService) {
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

  ngOnInit() {
    this.trendingMovies(1);
  }

  trendingMovies(page: number) {
    this.movies.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
      this.nowPlaying = res.results;
      this.loader = false;
    });
  }

}
