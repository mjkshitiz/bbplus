import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnRegNavbarComponent} from './un-reg-navbar/un-reg-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HeaderComponent},
  { path: 'register', component: ContactComponent},
  { path: 'about', component: AboutComponent },
  { path: 'search', component: PortfolioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
