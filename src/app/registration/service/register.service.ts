import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, router: Router) { }

  registerUser(user: User): Observable<any> {
    return this.http.post('api/v1/seller/register', user);
  }
}
