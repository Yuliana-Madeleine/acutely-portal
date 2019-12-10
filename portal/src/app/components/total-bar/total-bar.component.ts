import { Component, OnInit } from '@angular/core';
import { TotalBarService } from '../../services/totalBar.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-total-bar',
  templateUrl: './total-bar.component.html'
})
export class DisplayTotalBarComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
     chart: {
        type: 'column' // Other: bar splines column
     },
     title: {
        text: 'Total Bar'
     },
     legend: {
        enabled: false
    },
     credits: {
         enabled: false
     },
     xAxis: {
        categories: ['Location A', 'Akron', 'Branson', 'Corning']
     },
     yAxis: {
        title: {
           text: ''
        }
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
           name: '',
           colorByPoint: true,
           data: [
               {
                   name: 'Location A',
                   y: 62.74,
                   drilldown: 'Location A'
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
  constructor(private totalBar: TotalBarService) { }

  ngOnInit() {
  }

}
