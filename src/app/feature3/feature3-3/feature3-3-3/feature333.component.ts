import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature333',
  templateUrl: './feature333.component.html'
})
export class Feature333Component {

  id:string;

  constructor(_route: ActivatedRoute) {
    _route.params.subscribe(params=> {
      this.id = params["id"];
    });
  }
}

