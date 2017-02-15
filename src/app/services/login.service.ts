import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {

  login(user:string, password: string):boolean {
    if ((user && user == 'admin') && (password && password == '1234')) {
      sessionStorage.setItem('userlogged', 'true');
      return true;
    }
    return false;
  }

  closeSession():void {
    sessionStorage.removeItem('userlogged');
  }

  isUserLogged():boolean {
    let userlogged:string = sessionStorage.getItem('userlogged');
    return userlogged != null && userlogged == 'true';
  }

}
