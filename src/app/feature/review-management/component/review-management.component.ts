import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../services/review-management.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Review } from '../model/Review';

@Component({
  selector: 'app-review-management',
  templateUrl: './review-management.component.html',
  styleUrls: ['./review-management.component.css']
})
export class ReviewManagementComponent implements OnInit {

  displayedColumns: string[] = ['name', 'asin', 'rating', 'review', 'sentiment','score'];
  dataSource: MatTableDataSource<Review>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private pService: HomeService) {
  }

  ngOnInit() {
    this.pService.getAllReviews().subscribe(data => {
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

  highlightSentiment(s){
    if(s=='NEGATIVE')
    return {color:'red'};
    else if(s=='POSITIVE')
    return {color:'green'};
    else if(s=='NEUTRAL')
    return {color:'yellow'};
    else
    return;
  }

}
