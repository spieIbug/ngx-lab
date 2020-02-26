import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { Select, Store } from '@ngxs/store';
import { UsersState } from '../redux/users.state';
import { Users } from '../redux/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Select(UsersState.getUsers) users$: Observable<User[]>;
  search: string;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new Users.Load());
  }

  patch($event: string, user: User, key: keyof User) {
    if (user[key] !== $event) {
      const userToSave = new User({...user, [key]: $event});
      this.store.dispatch(new Users.Save(userToSave));
    }
  }

  delete(user: User) {
    this.store.dispatch(new Users.Remove(user.id));
  }

}
