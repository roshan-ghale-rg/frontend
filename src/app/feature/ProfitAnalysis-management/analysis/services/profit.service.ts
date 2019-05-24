import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfitService {
  sellerId: any
  constructor(private http: HttpClient) {
  }
  getAllProfit(): Observable<any> {

    let param = new HttpParams();
    this.sellerId = '788879';
    param = param.append('sellerId', this.sellerId);
    return this.http.get('/api/getSellers/sales', {params: param} );

  }

}
