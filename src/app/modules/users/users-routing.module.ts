import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:":id",
    component:UsersDetailComponent
  },
  {
    path:"",
    component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
