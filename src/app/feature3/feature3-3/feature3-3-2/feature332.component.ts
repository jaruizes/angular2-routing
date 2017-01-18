import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature332',
  templateUrl: './feature332.component.html'
})
export class Feature332Component {

  origin:string;

  constructor(_route: ActivatedRoute) {
    this.origin = _route.snapshot.params['origin'];
  }
}

