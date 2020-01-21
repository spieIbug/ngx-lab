import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxLab';
  users$: Observable<User[]>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users$ = this.usersService.findAll();
  }
}
