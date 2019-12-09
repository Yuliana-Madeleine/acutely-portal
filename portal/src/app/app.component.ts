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
      credits: {
             enabled: false
      },
      /*subtitle: {
         text: 'Source: WorldClimate.com"'
      },*/
      xAxis: {
         // categories: ['Location A', 'Akron', 'Branson', 'Corning']
      },
      yAxis: {
         title: {
            text: ''
         }
      },
      tooltip: {
         valueSuffix: '$'
      },
      series: [
           {
             name: 'Location A',
             data: [7.5, 0.8, 5.7, 11.3]
           },
           {
             name: 'Akron',
             data: [7.0]
           },
           {
               name: 'Branson',
               data: [7.0]
           },
           {
               name: 'Corning',
               data: [1.5]
           }
         /*{
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
         },
         {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
         },
         {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
         }*/
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
      credits: {
       enabled: false
      },
      xAxis: {},
      yAxis: {
         title: {
            text: ''
         }
      },
      tooltip: {
         valueSuffix: 'K'
      },
      series: [
           {
             name: 'Location A',
             data: [36]
           },
           {
               name: 'Akron',
               data: [47]
           },
           {
               name: 'Branson',
               data: [33]
           },
           {
               name: 'Corning',
               data: [35]
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
      credits: {
         enabled: false
      },
      xAxis: {},
      yAxis: {
         title: {
            text: ''
         }
      },
      tooltip: {
         valueSuffix: 'M'
      },
      series: [
           {
             name: 'Location A',
             data: [1.1]
           },
           {
               name: 'Akron',
               data: [0.1]
           },
           {
               name: 'Branson',
               data: [0.8]
           },
           {
               name: 'Corning',
               data: [1.2]
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
      credits: {
          enabled: false
      },
      xAxis: {},
      yAxis: {
         title: {
            text: ''
         }
      },
      tooltip: {
         valueSuffix: 'k'
      },
      series: [
           {
             name: 'Location A',
             data: [35]
           },
           {
               name: 'Akron',
               data: [50]
           },
           {
               name: 'Branson',
               data: [30]
           },
           {
               name: 'Corning',
               data: [30]
           }
      ]
   };
 }
 