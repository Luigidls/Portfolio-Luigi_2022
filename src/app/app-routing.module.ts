import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './pages/front-page/component/front-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/component/portfolio-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
