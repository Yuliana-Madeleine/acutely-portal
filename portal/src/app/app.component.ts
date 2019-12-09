import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   highcharts1 = Highcharts;
   chartOptions1 = {
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

   highcharts2 = Highcharts;
   chartOptions2 = {
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
   highcharts3 = Highcharts;
   chartOptions3 = {
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

   highcharts4 = Highcharts;
   chartOptions4 = {
      chart: {
         type: 'column' // Other: bar splines column
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
 }
