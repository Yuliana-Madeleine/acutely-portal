import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  highcharts = Highcharts;
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
       categories: ['Location A', 'Akron', 'Branson', 'Corning']
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
}
