import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';
import { AllserviceService } from 'src/app/allservice.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  current = 0;
  movies_data: any;
  constructor(
    private movieService: AllserviceService,
  ) { }

  ngOnInit(): void {
    this.getnowPlayingMovies(1);
    this.sliderTimer();
  }

  getnowPlayingMovies(page: number) {
    this.movieService.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
      this.movies_data = res.results;
    });
  }

  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.movies_data.length;
    }, 5000);
  }

}
