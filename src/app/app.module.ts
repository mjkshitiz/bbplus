import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //<--ng model lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Modal1Component } from './modal1/modal1.component';
import { Modal2Component } from './modal2/modal2.component';
import { Modal3Component } from './modal3/modal3.component';
import { Modal5Component } from './modal5/modal5.component';
import { Modal4Component } from './modal4/modal4.component';
import { Modal6Component } from './modal6/modal6.component';
import { UnRegNavbarComponent } from './un-reg-navbar/un-reg-navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    Modal1Component,
    Modal2Component,
    Modal3Component,
    Modal5Component,
    Modal4Component,
    Modal6Component,
    UnRegNavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
