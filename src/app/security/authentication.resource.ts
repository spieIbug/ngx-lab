import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationResource {

  static readonly URI = '/ngx/login';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post(AuthenticationResource.URI, {username, password}) as Observable<string>;
  }
}
