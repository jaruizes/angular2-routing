import {Injectable} from "@angular/core";

export interface User {
  name:String,
  password:String,
  roles:String[]
}

@Injectable()
export class LoginService {

  readonly users:User[] = [
    {name: 'admin', password: '1234', roles: ['rol1', 'rol2']},
    {name: 'noadmin', password: '1234', roles: ['rol2']}
  ];

  private userLogged:String;

  login(user:string, password: string):boolean {
    let usersFound:User[] = this.users.filter(_user => {
      return user === _user.name && password === _user.password;
    });

    if (usersFound.length === 1) {
      sessionStorage.setItem('userlogged', user);
      this.userLogged = user;
      return true;
    }
    return false;
  }

  closeSession():void {
    sessionStorage.removeItem('userlogged');
  }

  isUserLogged():boolean {
    let userStored:string = sessionStorage.getItem('userlogged');
    return this.userLogged === userStored;
  }

  userisAllowed(url:string) {
    let rolAllowedArr:string[] = /(rol[0-9]{1})/g.exec(url);
    if (rolAllowedArr.length > 0) {
      let usersFound:User[] = this.users.filter(_user => {
        return  _user.name === this.userLogged && _user.roles.indexOf(rolAllowedArr[0]) >= 0;
      });

      return usersFound.length === 1;
    }

    return true;
  }

}
