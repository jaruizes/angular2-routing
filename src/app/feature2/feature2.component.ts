import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature2',
  templateUrl: './feature2.component.html'
})

export class Feature2Component {

  showparam:boolean = false;
  param1:string;

  // This is the static data
  appName:string;
  appVersion:string;

  constructor(_route: ActivatedRoute) {
    let param:string = _route.snapshot.params['param1'];
    if (param) {
      this.showparam = true;
      this.param1 = param;
    }

    // Getting the static data
    let staticData = _route.snapshot.data[0];
    if (staticData) {
      this.appName = staticData['appName'];
      this.appVersion = staticData['appVersion'];
    }
  }
}

