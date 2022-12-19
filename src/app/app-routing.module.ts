import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './modules/home/home-component/home-component.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    // Route "/" (Home)
    path: '',
    loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule),
  },
  // {
  //   // Route "/" (Home)
  //   path: '',
  //   loadChildren: () =>
  //     import('./shared/shared.module').then((m) => m.SharedModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
