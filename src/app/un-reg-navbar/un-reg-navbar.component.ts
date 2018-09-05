import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-un-reg-navbar',
  templateUrl: './un-reg-navbar.component.html',
  styleUrls: ['./un-reg-navbar.component.css']
})
export class UnRegNavbarComponent implements OnInit {
  showLogin: boolean = true;

  constructor(private loginComponent: LoginComponent) { }


  ngOnInit() {
  }
  toggleLogin(): void {
    if (this.loginComponent.toggle()) {
    this.showLogin = !this.showLogin;
  }
  }

}
