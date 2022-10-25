import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './component/front-page.component';


@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    FrontPageRoutingModule
  ],
  exports: [FrontPageComponent]
})
export class FrontPageModule { }
