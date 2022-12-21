import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    // Route "/" (Home)
    path: '',
    loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    // Route "/auth"
    path: 'auth',
    loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    // Route "/users"
    path: 'users',
    loadChildren: () => import ('./modules/users/users.module').then(m => m.UsersModule),
  },
  {
    // Route "/any"
    path: '**',
    loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule),  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
