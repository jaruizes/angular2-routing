import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'feature1',
  templateUrl: './feature1.component.html'
})
export class Feature1Component {

  targetFeature:number = 0;

  constructor(private _router: Router){}

  /**
   * This function navigates to a target feature using navigate() without
   * sending any params
   */
  gotofeature() {
    if (this.targetFeature < 1 || this.targetFeature > 3) {
      alert('You have to enter a value between 1 and 3');
      return;
    }

    let target:string = `/feature${this.targetFeature}`;

    // The this.targetFeature value is going to be sent as navigation param
    this._router.navigate([target, this.targetFeature]);
  }
}

