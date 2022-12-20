import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    // Route "/" (Home)
    path: '',
    loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    // Route "/auth" (Home)
    path: 'auth',
    loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
