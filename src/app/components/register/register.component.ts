import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  
  constructor(private userService: UserServiceService, private router: Router){}
  

  ngOnInit() {
     this.user = this.userService.getter();
   }

  onClickSubmit() {
    
    if (this.user.userId == undefined){
      this.userService.createUser(this.user).subscribe(
        () => {
          console.log(this.user);
          this.router.navigate(['/']);
        },(error) => {
          console.log(error);
        });
    }else{
      this.userService.updateUser(this.user).subscribe(
        (user) => {
          console.log(user);
          this.router.navigate(['/']);
        }, (error) => {
          console.log(error);
        });
    }
   }

}
