import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SharedModule } from '@shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    HomeComponentComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
