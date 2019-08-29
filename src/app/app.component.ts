import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uni-frontend';
  private switch: number;
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (this.router.urlHandlingStrategy) {
      this.switch = 1;
    } else {
      this.switch = 2;
    }
    // console.log('configured routes: ', this.router.createUrlTree);
  }
}
