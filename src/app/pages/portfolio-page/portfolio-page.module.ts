import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioPageComponent } from './component/portfolio-page.component';
import { TeaserComponent } from 'src/app/features/teaser/teaser.component';


@NgModule({
  declarations: [PortfolioPageComponent, TeaserComponent],
  imports: [
    CommonModule,
    PortfolioPageRoutingModule
  ],

  exports: [
    PortfolioPageComponent
  ]
})
export class PortfolioPageModule {

 }
