import { Injectable } from '@angular/core';
import { AuthenticationResource } from './authentication.resource';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { intersection, isEmpty } from 'lodash';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  static readonly JWT_KEY = 'token';

  constructor(private authenticationResource: AuthenticationResource) {
  }

  login(username: string, password: string): Observable<string> {
    return this.authenticationResource.login(username, password)
      .pipe(
        tap(jwt => localStorage.setItem(AuthenticationService.JWT_KEY, jwt)),
      );
  }

  isLogged(): boolean {
    const jwt = this.getJWT();
    return !jwt ? false : !!jwt_decode(jwt).name;
  }

 getJWT() {
    return localStorage.getItem(AuthenticationService.JWT_KEY);
  }

  hasRole(roles: string[]): boolean {
    if (!this.isLogged()) {
      return false;
    }

    const jwt = this.getJWT();
    return !isEmpty(intersection(jwt_decode(jwt).roles, roles));
  }
}
