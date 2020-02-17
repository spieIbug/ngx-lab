import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UsersResource } from './users.resource';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private userResource: UsersResource) {
  }

  findAll(): Observable<User[]> {
    return this.userResource.findAll();
  }

  findById(id: string): Observable<User> {
    return this.userResource.findById(id);
  }

  save(user: User): Observable<User[]> {
    return user.id ? this.userResource.update(user) : this.userResource.add(user);
  }

  deleteById(id: string): Observable<User[]> {
    return this.userResource.deleteById(id);
  }
}
