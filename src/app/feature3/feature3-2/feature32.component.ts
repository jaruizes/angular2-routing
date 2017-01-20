import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'feature32',
  templateUrl: './feature32.component.html'
})
export class Feature32Component {

  constructor(private _router: Router){}

  moreDetail() {
    this._router.navigate(['/feature3/feature33', 'feature3-2', {outlets: {'primary-info': ['feature331',1], 'secondary-info': ['feature332',1], 'extra-info': null}}])
  }
}

