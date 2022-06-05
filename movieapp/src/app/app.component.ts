import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieApp';
  loading = false;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        setTimeout (() => {
          this.loading = false;
       }, 1000);
      }
    });
  }

}


