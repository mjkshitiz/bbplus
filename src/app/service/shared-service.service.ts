import { Injectable } from '@angular/core';
import { BloodGroup } from '../model/blood-group';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  url: string="http://localhost:8080/";
  bloodGroup:BloodGroup;

  constructor(private http:HttpClient) { }

  getBloodGroup():Observable<BloodGroup>
  {
    return this.http.get<BloodGroup>(this.url+'bloodtypes');
  }
}
