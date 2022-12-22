import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:":id",
    component:UsersDetailComponent,
    canActivate: [SessionGuard]

  },
  {
    path:"",
    component:UsersComponent,
    canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
