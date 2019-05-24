import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService implements OnInit {
    asin: string;
  constructor(private http: HttpClient) { }
  ngOnInit() {

  }


  getSellers(data): Observable<any> {
    let param = new HttpParams();
    this.asin = 'B00HNSSHQ6';
    param = param.append('asinNo', data);


    return this.http.get('api/getSellers', {params: param} );
  }


  getSellersDetails(data): Observable<any> {
    let param = new HttpParams();
    param = param.append('asinNo', data);


    return this.http.get('/api/getSellers/competitor', {params: param} );
  }

  getSellersRange(query, range): Observable<any> {

    let param = new HttpParams();
    param = param.append('queryId', query);
    param = param.append('id', range);

    return this.http.get('/api/getSellers/competitorList', {params: param} );
  }

  getAlgorithmKeywords(data): Observable<any> {
    let param = new HttpParams();
    param = param.append('amazonId', data);
    return this.http.get('/api/getSellers/competitorKeywords', {params: param} );
  }




}
