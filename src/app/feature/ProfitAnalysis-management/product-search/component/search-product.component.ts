import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductList} from '../model/ProductList';
import {SearchProductService} from '../services/search-product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  sales: number;
  name: string;
  asinNo: string;
  displayedColumns: string[] = ['url', 'name', 'ASIN', 'actions'];
  dataSource: MatTableDataSource<ProductList>;
  isLoading = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private searchProductService: SearchProductService, private router: Router) {
  }

  ngOnInit() {

    this.searchProductService.searchProducts().subscribe(data => {
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  startAction(i: number, productUrl: string, ProuductName: string, sales: number, asin: string, shippingCost: number, tax: number) {


    this.sales = sales;
    this.name = ProuductName;
    this.asinNo = asin;
    this.router.navigate(['/home/competitor/product-details'], {state: {productName: this.name, asin: this.asinNo}});

  }
}

