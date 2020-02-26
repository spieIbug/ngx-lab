import {User} from '../user.model';
import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Users} from './users.actions';
import {UsersService} from '../users.service';
import {tap} from 'rxjs/operators';


interface UsersStateModel {
  users: User[];
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    users: [],
  }
})
export class UsersState {

  constructor(private usersService: UsersService, private store: Store) {
  }

  @Selector()
  static getUsers(state: UsersStateModel): User[] {
    return state.users;
  }

  @Action(Users.Load)
  load(ctx: StateContext<UsersStateModel>) {
    return this.usersService.findAll().pipe(tap(users => {
      ctx.setState({
        users,
      });
    }));
  }

  @Action(Users.Save)
  save(ctx: StateContext<UsersStateModel>, action: Users.Save) {
    const user = action.user;
    return this.usersService.save(user).pipe(tap(users => {
      this.store.dispatch(new Users.Load());
    }));
  }

  @Action(Users.Remove)
  remove(ctx: StateContext<UsersStateModel>, action: Users.Remove) {
    return this.usersService.deleteById(action.userId).pipe(tap(users => {
      ctx.setState({
        users,
      });
    }));
  }
}
