import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get('api/v1/products');
  }

  updateProduct(p:Product): Observable<any> {
    return this.http.put('api/v1/products/update',p);
  }

}
