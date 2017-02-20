import {Injectable} from "@angular/core";
import {CanActivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {LoginService} from "../services/login.service";

@Injectable()
export class HasPrivateAccessGuard implements CanActivate, CanActivateChild {
  constructor(private loginService:LoginService) {}

  canActivate() {
    console.log('This is the HasPrivateAccessGuard...');
    return this.loginService.isUserLogged();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('This is the HasPrivateAccessGuard-child...');
    return this.loginService.userisAllowed(state.url);
  }
}
