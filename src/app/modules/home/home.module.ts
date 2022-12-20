import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class HomeModule { }
