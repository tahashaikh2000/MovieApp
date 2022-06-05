import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MoviedashboardComponent } from './moviedashboard/moviedashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FavouritedashboardComponent } from './favouritedashboard/favouritedashboard.component';
import { FormsModule } from '@angular/forms';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MoviedetailsComponent } from './moviedetails/moviedetailscomponent';
import { MatTabsModule } from '@angular/material/tabs';
import { MoviedialogComponent } from './moviedetails/moviedialog/moviedialog.component';
import { CarouselModule } from 'primeng/carousel';
import { SliderComponent } from './slider/slider.component';
import { PipeModule } from './pipe/pipe.module';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonComponent } from './shared/skeleton/skeleton.component';
 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    // MoviedashboardComponent,
    FavouritedashboardComponent,
    MovieSearchComponent,
    NavbarComponent,
    SliderComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatPaginatorModule,
    MatTabsModule,
    CarouselModule,
    PipeModule,
    SkeletonModule,
    SidebarModule,
    SkeletonComponent
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
