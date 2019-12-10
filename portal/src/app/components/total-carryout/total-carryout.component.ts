import { Component, OnInit } from '@angular/core';
import { TotalCarryoutService } from '../../services/totalCarryout.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-total-carryout',
  templateUrl: './total-carryout.component.html'
})
export class DisplayTotalCarryoutComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
     chart: {
        type: 'bar' // Other: bar splines column
     },
     title: {
        text: 'Total Carryout'
     },
     legend: {
        enabled: false
     },
     credits: {
        enabled: false
     },
     xAxis: {
        type: 'category'
     },
     yAxis: {
        title: false
     },
     tooltip: {
        valueSuffix: 'M'
     },
     plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}M'
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
                   y: 1.1
               },
               {
                   name: 'Akron',
                   y: 0.1
               },
               {
                   name: 'Branson',
                   y: 0.8
               },
               {
                   name: 'Corning',
                   y: 1.2
               }
           ]
       }
     ]
  };
  constructor(private totalCarryout: TotalCarryoutService ) { }

  ngOnInit() {
  }

}
