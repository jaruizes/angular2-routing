import {Component} from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'feature1',
  templateUrl: './feature1.component.html'
})
export class Feature1Component {

  targetFeature:number = 0;

  constructor(private _router: Router, private loginService:LoginService){}

  /**
   * This function navigates to a target feature using navigate()
   */
  gotofeature() {
    let target:string = `/feature${this.targetFeature}`;
    let navigationExtras:NavigationExtras = {
      queryParams: {
        qParam1: 1,
        test2: 'test'
      }
    };

    this._router.navigate([target], navigationExtras);
  }

  goDirectlyTo33() {
    this._router.navigate(['/feature3/feature33','feature1']);
  }

  goToSecretFeature(user, password) {
    if (this.loginService.login(user,password)) {
      this._router.navigate(['/feature4']);
    } else {
      window.alert('Try again!');
    }
  }
}

