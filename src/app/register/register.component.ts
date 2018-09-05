import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
register;
  constructor(private http: HttpClient) {
    this.register = {
      firstname: '',
      lastname: '',
      address: '' ,
      email: '',
      phone: '',
      dob: '',
     };

  }

  ngOnInit() {
  }

  onClickSubmit(f) {
    // this.emailid = data.emailid;
    console.log(f.value);
   return this.http.post('http://localhost:8080/save', f.value)
   .subscribe(() => {console.log(f.value); });
   }

}
