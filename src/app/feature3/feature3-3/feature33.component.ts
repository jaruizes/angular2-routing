import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature33',
  templateUrl: './feature33.component.html'
})
export class Feature33Component {

  origin:string;

  constructor(_route: ActivatedRoute) {
    this.origin = _route.snapshot.params['origin'];
  }
}

