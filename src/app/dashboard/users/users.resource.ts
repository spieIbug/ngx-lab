import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UsersResource {
  readonly URI = '/ngx/users';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.http.get(this.URI).pipe(map(users => _.map(users, usr => new User(usr))));
  }

  findById(id: string): Observable<User> {
    return this.http.get(`${this.URI}/${id}`).pipe(map(user => new User(user)));
  }

  add(user: User): Observable<User[]> {
    return this.http.post(this.URI, user).pipe(map(users => _.map(users, usr => new User(usr))));
  }

  update(user: User): Observable<User[]> {
    return this.http.put(`${this.URI}/${user.id}`, user).pipe(map(users => _.map(users, usr => new User(usr))));
  }

  deleteById(id: string): Observable<User[]> {
    return this.http.delete(`${this.URI}/${id}`).pipe(map(users => _.map(users, usr => new User(usr))));
  }
}
