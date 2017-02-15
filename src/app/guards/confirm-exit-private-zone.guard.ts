import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../services/login.service";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ConfirmExitPrivateZoneGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(private loginService:LoginService) {}

  canDeactivate(component: CanComponentDeactivate) {
    if (component.canDeactivate && component.canDeactivate()) {
      this.loginService.closeSession();
      return true;
    }

    return false;
  }

}
