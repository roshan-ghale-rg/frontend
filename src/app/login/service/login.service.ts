import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  asin: string;
  constructor(private http: HttpClient, router: Router) { }

  checkUser(user: User): Observable<any> {
    return this.http.post('api/v1/seller/login', user, {observe: 'response'});
  }



}
