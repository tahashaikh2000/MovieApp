import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { FavouritedashboardComponent } from './favouritedashboard/favouritedashboard.component';
import { MoviedashboardComponent } from './moviedashboard/moviedashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  
  {path:"",component: HomeComponent},
  {path:"signup",component: SignupComponent},
  {path:"login",component: LoginComponent},
  {path:"favourite",component: FavouritedashboardComponent,canActivate:[AuthGuard]},
  {path:"movie",component: MoviedashboardComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
