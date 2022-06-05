import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Favourites } from 'src/app/model/favourite';
import { AllserviceService } from 'src/app/allservice.service';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/register';

@Component({
  selector: 'app-favouritedashboard',
  templateUrl: './favouritedashboard.component.html',
  styleUrls: ['./favouritedashboard.component.css']
})
export class FavouritedashboardComponent {
  favList:Array<Favourites>=[];
  /** Based on the screen size, switch from standard to one column per row */
  

  constructor(private api:AllserviceService,private router:Router) {}
   user:Register=new Register;

  ngOnInit(): void {
    this.api.getAllFav(this.api.loginEmail).subscribe(data=>{
      this.favList=data;
      console.log("fav");
      console.log(this.favList);
    })
  }
}
