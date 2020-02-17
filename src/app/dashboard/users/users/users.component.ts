import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;
  refresh$ = new BehaviorSubject(false);
  search: string;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users$ = this.refresh$.pipe(switchMap(() => this.route.data.pipe(map((d: {users: User[]}) => d.users))));
  }

  patch($event: string, user: User, key: keyof User) {
    if (user[key] !== $event) {
      user[key] = $event;
      this.usersService.save(user)
        .pipe(tap(() => this.refresh$.next(true)))
        .subscribe();
    }
  }

  delete(user: User) {
    this.usersService.deleteById(user.id)
      .pipe(tap(() => this.refresh$.next(true)))
      .subscribe();
  }

}
