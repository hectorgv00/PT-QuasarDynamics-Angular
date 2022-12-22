import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotokenGuard } from '@core/guards/notoken/notoken.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "login",
    component:LoginComponent,
    canActivate: [NotokenGuard]

  },
  {
    path: "register",
    component:RegisterComponent,
    canActivate: [NotokenGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
