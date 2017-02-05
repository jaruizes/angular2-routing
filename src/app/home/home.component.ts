import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  staticData:Object;

  constructor(route: ActivatedRoute) {
    this.staticData = route.snapshot.data;
  }
}

