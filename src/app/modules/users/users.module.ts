import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule, HttpClientModule],
})
export class UsersModule {}
