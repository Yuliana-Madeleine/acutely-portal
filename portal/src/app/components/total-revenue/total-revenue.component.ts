import { Component, OnInit } from '@angular/core';
import { TotalRevenueService } from '../../services/totalRevenue.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html'
})
export class DisplayTotalRevenueComponent implements OnInit {
  highcharts = Highcharts;
  totalrevenue: any[] = [];

  chartOptions = {
    chart: {
       type: 'column' // Other: bar splines column
    },
    title: {
       text: 'Total Revenue'
    },
    legend: {
       enabled: false
    },
    credits: {
           enabled: false
    },
    xAxis: {
      categories: ['testing']
    },
    yAxis: {
       title: {
          text: ''
       }
    },
    tooltip: {
       valueSuffix: '$'
    },
    plotOptions: {
       series: {
           borderWidth: 0,
           dataLabels: {
               enabled: true,
               format: '{point.y:.1f}$'
           }
       }
    },
    series: [
       {
           name: '',
           colorByPoint: true,
           data: [
            {
               name: 'Location A',
               y: 62.74,
               drilldown: 'Location At'
            },
            {
                  name: 'Akron',
                  y: 10.57,
                  drilldown: 'Akron'
            },
            {
                  name: 'Branson',
                  y: 7.23,
                  drilldown: 'Branson'
            },
            {
                  name: 'Corning',
                  y: 5.58,
                  drilldown: 'Corning'
            }
           ]
       }
   ]
 };

  ngOnInit() {
    // this.totalrevenue = this.totalRevenueService.getRevenue();
    // console.log(this.totalrevenue);
  }

  constructor(private totalRevenueService: TotalRevenueService ) {
    // this.chartOptions.series = this.totalRevenueService.getRevenue();
    // console.log(this.chartOptions.series);
   }
}
