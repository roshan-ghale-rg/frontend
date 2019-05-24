import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProductDetailsService} from '../service/product-details.service';
import {MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ChartDataSets} from 'chart.js';
import {AmazonSellerDetails} from '../model/AmazonSellerDetails';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {KeywordDialogComponent} from '../keyword-dialog/keyword-dialog.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    name: string;
    sellers: AmazonSellerDetails;
    asin: string;
    query: number;
    amazonId: number;
  noData: any;
  data: any;
  isLoading = true;
  isRankLoading = true;
  public reviewChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 6,
          min: 0,
          stepSize: 1
        },
        gridLines: {
          color: 'rgba(171,171,171,1)',
          lineWidth: 0.5
        }
      }]
    }
  };
  public colors = [
    {
      backgroundColor: 'rgba(64, 113, 158, 1)'
    }
  ];
  public reviewChartLabels: string [] = [];

  public reviewChartData: any [] = [
    {data: null, label: 'Rating'},

  ];
  public reviewChartType = 'bar';
  public reviewChartLegend = true;


  public buyBoxChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    maintainAspectRatio: false
  };
  public buyBoxcolors = [
    {
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ];

  public  queryId = 0;

  public buyBoxChartLabels: string [] = [];
  public buyBoxChartType = 'horizontalBar';
  public buyBoxChartLegend = true;
  public buyBoxChartData: any [] = [
    {data: null, label: 'Price'},

  ];

  displayedColumns: string[] = ['productTitle', 'category', 'productReviews', 'salePrice', 'Isprime', 'rank', 'actions'];
  dataSource: MatTableDataSource<AmazonSellerDetails>;
  TopSellerDataSource: MatTableDataSource<AmazonSellerDetails>;
  BottomSellerDataSource: MatTableDataSource<AmazonSellerDetails>;
  midSellerDataSource: MatTableDataSource<AmazonSellerDetails>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private  productDetailsService: ProductDetailsService, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private dialog: MatDialog) {
    this.name = this.router.getCurrentNavigation().extras.state.productName;
    this.asin = this.router.getCurrentNavigation().extras.state.asin;

  }

  ngOnInit() {

    this.productDetailsService.getSellersDetails(this.asin).subscribe(
      res => {
        this.sellers = res;
        this.queryId = res[0].queryId;
        this.reviewChartLabels = res.map (item => item.seller);
        const ratings = res.map (item => item.sellerRating);

        this.reviewChartData [0].data = ratings;

        this.buyBoxChartLabels = res.map (item => item.seller);
        const price = res.map (item => item.productPrice);

        this.buyBoxChartData [0].data = price;
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(res);
        if (this.dataSource.data.length === 1 && this.dataSource.data[0].queryId === 0) {
          this.data = this.dataSource.data.slice();
          this.data.shift();
          this.dataSource.data = this.data;
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.noData = this.dataSource.connect().pipe(map(data => data.length === 0));
        this.loadTop3();
        this.loadMean3();
        this.loadBottom3();
      },
    );

  }

  loadTop3() {
    this.productDetailsService.getSellersRange(this.queryId, 1).subscribe(
      res => {
        this.isRankLoading = false;
        this.sellers = res;

        this.TopSellerDataSource = new MatTableDataSource(res);

      },
    );
  }

  loadMean3() {
    this.productDetailsService.getSellersRange(this.queryId, 2).subscribe(
      res => {
        this.isRankLoading = false;
        this.sellers = res;

        this.BottomSellerDataSource = new MatTableDataSource(res);

      },
    );
  }

  loadBottom3() {
    this.productDetailsService.getSellersRange(this.queryId, 3).subscribe(
      res => {
        this.isRankLoading = false;
        this.sellers = res;
        this.midSellerDataSource = new MatTableDataSource(res);
    /*    this.midSellerDataSource.paginator = this.paginator;
        this.midSellerDataSource.sort = this.sort;*/
      },
    );
  }


  getCompetitiveSeller(data: string) {
    this.ngOnInit();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialog(row) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '600px';
    dialogConfig.maxWidth = '1000 px';
    dialogConfig.maxHeight = '1000 px';
    dialogConfig.data = row;
    this.dialog.open(KeywordDialogComponent, dialogConfig);
  }

  startAction(id) {

    this.amazonId = id;
    this.openDialog(this.amazonId);
  }

}
