import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature2',
  templateUrl: './feature2.component.html'
})

export class Feature2Component {

  showparam: boolean = false;
  param1: string;
  queryParams: string;

  // This is the static data
  appName: string;
  appVersion: string;

  constructor(private _route: ActivatedRoute) {
    // Getting the route params
    this._route.params.subscribe(params => {
      if (params['param1']) {
        this.param1 = params['param1'];
        this.showparam = true;
      }
    });

    // Getting the static data
    let staticData = this._route.snapshot.data[0];
    if (staticData) {
      this.appName = staticData['appName'];
      this.appVersion = staticData['appVersion'];
    }

    // Getting query params
    this._route.queryParams.subscribe(params => {
      this.queryParams = JSON.stringify(params);
    });
  }
}

