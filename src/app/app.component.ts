import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uni-frontend';
  switch: number;
  constructor(private router: Router) { }
  ngOnInit(): void {
    // console.log('configured routes: ', this.router.createUrlTree);
  }
}
