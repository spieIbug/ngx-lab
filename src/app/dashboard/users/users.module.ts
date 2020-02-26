import { NgModule } from '@angular/core';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared.module';
import { UsersComponent } from './users/users.component';
import { UserSearchPipe } from './user-search.pipe';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './redux/users.state';

@NgModule({
  imports: [
    SharedModule,
    UsersRoutingModule,
    NgxsModule.forFeature([UsersState]),
  ],
  declarations: [NewUserComponent, UsersComponent, UserSearchPipe],
})
export class UsersModule {

}
