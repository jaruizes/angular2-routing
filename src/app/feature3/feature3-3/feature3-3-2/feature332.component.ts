import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature332',
  templateUrl: './feature332.component.html'
})
export class Feature332Component {

  id:number;

  constructor(_route: ActivatedRoute) {
    _route.params.subscribe(params=> {
      this.id = params["id"];
    });
  }
}

