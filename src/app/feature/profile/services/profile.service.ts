import { Injectable } from '@angular/core';
import { User } from 'src/app/login/model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  update(user: User): Observable<any> {
    return this.http.put('api/v1/seller/update', user);
  }
}
