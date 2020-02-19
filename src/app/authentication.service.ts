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
    const jwt = localStorage.getItem(AuthenticationService.JWT_KEY);
    return !jwt ? false : !!jwt_decode(jwt).name;
  }
}
