import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../services/home.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Product } from '../model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['imgUrl', 'name', 'currentStock', 'salesVelocity', 'leadTime', 'ooStock', 'reOrder'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isLoadingResults=false;

  constructor(private pService: HomeService) {
  }

  ngOnInit() {
    this.isLoadingResults=true;
    this.pService.getAllProducts().subscribe(data => {
      this.isLoadingResults=false;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (item, property) => {
        switch(property) {
          case 'leadTime': return item.productForecast.leadTime;
          case 'ooStock': return item.productForecast.ooStock;
          case 'reOrder': return item.productForecast.reorder;
          default: return item[property];
        }
      };
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  updateProduct(p:any,lt:any){
    if(Number(lt)!=NaN&&Number(lt)>0)
    this.pService.updateProduct(p).subscribe(data=>{
      this.ngOnInit();
    });
  }

}
