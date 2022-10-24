import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './component/front-page.component';
import { NavbarComponent } from 'src/app/features/navbar/navbar.component';
import { FooterComponent } from 'src/app/features/footer/footer.component';


@NgModule({
  declarations: [FrontPageComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ],
  exports: [
    FrontPageComponent
  ]
})
export class FrontPageModule { }
