import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsRoutingModule } from './moviedashboardrouting.module';
import { MoviedashboardComponent } from './moviedashboard.component';
import {CarouselModule} from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
      CommonModule,
      PipeModule,
      CarouselModule,
      SkeletonModule,
      ScrollingModule,
      MatPaginatorModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MovieDetailsRoutingModule,
      MoviedashboardComponent
    ],
    // declarations: [
    //   MoviedashboardComponent,
    // ]
  })
  export class MoviesModule {}