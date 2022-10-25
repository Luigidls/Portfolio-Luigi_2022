import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FrontPageComponent } from './pages/front-page/component/front-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/component/portfolio-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-page', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
