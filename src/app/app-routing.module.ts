import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnRegNavbarComponent} from './un-reg-navbar/un-reg-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { EventComponent } from './event/event.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HeaderComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'about', component: AboutComponent },
  { path: 'event', component: EventComponent},
  { path: 'search', component: SearchComponent },
  { path: 'userinfo', component: UserinfoComponent},
  { path: 'userrequest', component: UserRequestComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
