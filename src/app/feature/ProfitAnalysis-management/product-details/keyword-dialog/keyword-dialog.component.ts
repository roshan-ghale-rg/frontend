import {Component, Inject, OnInit, Optional, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {ProductDetailsService} from '../service/product-details.service';
import {SellerKeyword} from '../model/SellerKeyword';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-keyword-dialog',
  templateUrl: './keyword-dialog.component.html',
  styleUrls: ['./keyword-dialog.component.css']
})
export class KeywordDialogComponent implements OnInit {
  displayedColumns: string[] = ['algorithmType', 'score', 'Keywords'];
  dataSource: MatTableDataSource<SellerKeyword>;
  amazonId: number;
  seller: SellerKeyword;
  noData: any;
  productTitle: string;
  extractKeyword: any;
  title: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private productDetailsService: ProductDetailsService, public dialogRef: MatDialogRef<KeywordDialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.amazonId = this.data;
    console.log('set value' + this.amazonId);
    console.log('passed value' + this.data);
    this.productDetailsService.getAlgorithmKeywords(this.amazonId).subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        this.noData = this.dataSource.connect().pipe(map(data => data.length === 0));

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    );
/*
    this.productDetailsService.getTitleKeywords('veet sensitive precision beauty styler expert').subscribe(
      res => {
        this.extractKeyword = res;
        this.title = this.extractKeyword.title;

        console.log(res);
        console.log(this.title);

      },
    );*/



  }
  close() {
    this.dialogRef.close();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
