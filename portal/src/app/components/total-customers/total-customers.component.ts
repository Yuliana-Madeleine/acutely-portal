import { Component, OnInit } from '@angular/core';
import { TotalCustomersService } from '../../services/totalCustomers.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-total-customers',
  templateUrl: './total-customers.component.html'
})
export class DisplayTotalCustomersComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
     chart: {
        type: 'bar' // Other: bar splines column
     },
     title: {
        text: 'Total Customers'
     },
     legend: {
        enabled: false
     },
     credits: {
      enabled: false
     },
     accessibility: {
        announceNewData: {
            enabled: true
        }
     },
     xAxis: {
        type: 'category'
     },
     yAxis: {
        title: false
     },
     tooltip: {
        valueSuffix: 'K'
     },
     plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}K'
            }
        }
     },
     series: [
        {
           name: 'Locations',
           colorByPoint: true,
           data: [
               {
                   name: 'Location A',
                   y: 36.74
               },
               {
                   name: 'Akron',
                   y: 47.57
               },
               {
                   name: 'Branson',
                   y: 33.23
               },
               {
                   name: 'Corning',
                   y: 34.58
               }
           ]
       }
     ]
  };

  constructor(private totalCustomersService: TotalCustomersService) { }

  ngOnInit() {
  }

}

