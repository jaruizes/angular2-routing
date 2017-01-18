import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature333',
  templateUrl: './feature333.component.html'
})
export class Feature333Component {

  origin:string;

  constructor(_route: ActivatedRoute) {
    this.origin = _route.snapshot.params['origin'];
  }
}

