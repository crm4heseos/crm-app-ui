import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeseosService } from './heseos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heseos';
  public isLoggedIn = false;
  constructor(public service: HeseosService, private route:Router){

  }
  redirectToPage(pagePath:any){
    this.route.navigate([`/${pagePath}`]);
  }
}
