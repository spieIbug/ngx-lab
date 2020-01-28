import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [ CommonModule, UsersRoutingModule ],
  declarations: [ NewUserComponent ],
})
export class UsersModule {

}
