import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './moviedetailsrouting.module';
import { MoviedetailsComponent } from './moviedetailscomponent';
import { MatTabsModule } from '@angular/material/tabs';
// import { MatDialogModule, MatIconModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MoviedialogComponent } from './moviedialog/moviedialog.component';
import { CarouselModule } from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';


@NgModule({
    // declarations: [
    //   MoviedetailsComponent,
    //   MoviedialogComponent
    // ],
    entryComponents: [
      MoviedialogComponent
    ],
    imports: [
      CommonModule,
      MovieDetailsRoutingModule,
      PipeModule,
      MatTabsModule,
      MatDialogModule,
      MatIconModule,
      CarouselModule
    ],
  
  })
  export class MovieDetailsModule { }