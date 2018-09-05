import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //<--ng model lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { Modal1Component } from './modal1/modal1.component';
import { UnRegNavbarComponent } from './un-reg-navbar/un-reg-navbar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { EventComponent } from './event/event.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserRequestComponent } from './user-request/user-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AboutComponent,
    RegisterComponent,
    FooterComponent,
    Modal1Component,
    UnRegNavbarComponent,
    LoginComponent,
    EventComponent,
    UserinfoComponent,
    UserRequestComponent
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
