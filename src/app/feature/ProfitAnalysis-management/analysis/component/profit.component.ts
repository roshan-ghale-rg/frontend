import { Component, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {ProfitService} from '../services/profit.service';
import {TurnOver} from '../model/TurnOver';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {
  result: string;
  turnOver: TurnOver;
  sellers: string;
  totalSellersSale: number [] = [];
  totalSellersProfit: number [] = [];
  totalSale = 0;
  totalProfit = 0;
  sales: number;
  profit: number;

  salesChartTitle: 'Profit & Sale in 30 days';
  public salesChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          display: false
        }
      }]
    }

  };
  constructor(private profitService: ProfitService) {

  }

  public salesChartLabels: Date [] = [];
  public salesChartType = 'line';
  public salesChartLegend = true;
  public salesChartData: any [] = [
    {data: 0, label: 'sales'},
    {data: 0, label: 'profit'},

  ];

  ngOnInit() {
    this.profitService.getAllProfit().subscribe(

    res => {
        this.salesChartLabels = res.map (item => item.date.substring(0, 10));

        const sales = res.map (item => item.sales);
        this.totalSellersSale = res.map (item => item.sales);
        const profit = res.map (item => item.profit);
        this.totalSellersProfit = res.map (item => item.profit);
        this.salesChartData [0].data = sales  ;
        this.salesChartData [1].data = profit  ;

        for (let i = 0; i < this.totalSellersSale.length; i++) {

          this.totalSale += this.totalSellersSale[i];

        }
        for (let i = 0; i < this.totalSellersProfit.length; i++) {

          this.totalProfit += this.totalSellersProfit[i];

        }

      },
    );



  }

}
