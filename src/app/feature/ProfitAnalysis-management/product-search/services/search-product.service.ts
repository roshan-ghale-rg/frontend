import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  constructor(private http: HttpClient) { }

  searchProducts(): Observable<any> {
    return this.http.get('/api/SearchProduct/list');
  }
}
