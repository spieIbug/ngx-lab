import { Injectable } from '@angular/core';
import { AuthenticationResource } from './authentication.resource';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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

  private getJWT() {
    return localStorage.getItem(AuthenticationService.JWT_KEY);
  }

  hasRole(role: string): boolean {
    if (!this.isLogged()) {
      return false;
    }

    const jwt = this.getJWT();
    return jwt_decode(jwt).roles.includes(role);
  }
}
