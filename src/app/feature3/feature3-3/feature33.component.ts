import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'feature33',
  templateUrl: './feature33.component.html'
})
export class Feature33Component {

  origin:string;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.origin = this._route.snapshot.params['origin'];
  }
}

