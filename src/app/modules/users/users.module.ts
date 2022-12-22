import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '@shared/shared.module';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  declarations: [UsersComponent, UsersDetailComponent],
  imports: [
    CommonModule, 
    UsersRoutingModule, 
    SharedModule, 
  
  ],
})
export class UsersModule {}
