import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/footer/footer.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioPageModule } from './pages/portfolio-page/portfolio-page.module';
import { FrontPageModule } from './pages/front-page/front-page.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PortfolioPageModule,
    FrontPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
