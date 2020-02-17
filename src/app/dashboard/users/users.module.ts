import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [ SharedModule, UsersRoutingModule ],
  declarations: [ NewUserComponent, UsersComponent ],
})
export class UsersModule {

}
