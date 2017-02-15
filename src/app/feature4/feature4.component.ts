import {Component} from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'feature4',
  templateUrl: './feature4.component.html'
})
export class Feature4Component {

  canDeactivate() {
    return window.confirm('Do you really want to exit?');
  }
}

