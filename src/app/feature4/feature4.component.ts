import {Component} from '@angular/core';
import {CanComponentDeactivate} from "../guards/confirm-exit-private-zone.guard";
@Component({
  selector: 'feature4',
  templateUrl: './feature4.component.html'
})
export class Feature4Component implements CanComponentDeactivate {

  canDeactivate() {
    return window.confirm('Do you really want to exit?');
  }
}

