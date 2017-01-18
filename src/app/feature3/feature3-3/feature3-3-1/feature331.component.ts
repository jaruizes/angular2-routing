import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature331',
  templateUrl: './feature331.component.html'
})
export class Feature331Component {

  origin:string;

  constructor(_route: ActivatedRoute) {
    this.origin = _route.snapshot.params['origin'];
  }
}

