import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user.model';
import { UsersService } from '../users.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;
  refresh$ = new BehaviorSubject(false);

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users$ = this.refresh$.pipe(switchMap(() => this.usersService.findAll()));
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
