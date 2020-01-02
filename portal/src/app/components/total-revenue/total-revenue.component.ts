import { Component, OnInit } from '@angular/core';
import { InfoReportService } from '../../services/infoReports.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html'
})
// export class DisplayTotalRevenueComponent implements OnInit {

export class DisplayTotalRevenueComponent implements OnInit {
  dataList: any = [];

  public chartType = 'bar';
  public chartDatasets: Array<any> = [
    { data: [], label: 'Revenues' }
  ];
  public chartLabels: Array<any> = [];
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(46,145,137,1)',
        'rgba(243, 196, 96, 1)',
        'rgba(175, 80, 209, 1)',
        'rgba(241, 68, 116, 1)'
      ],
      borderColor: [
        'rgba(46,145,137,1)',
        'rgba(243, 196, 96, 1)',
        'rgba(175, 80, 209, 1)',
        'rgba(241, 68, 116, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartPlugins = [pluginDataLabels];
  constructor(private infoReportService: InfoReportService) { }

  ngOnInit() {
      this.infoReportService.GetTotalRevenues().subscribe(res => {
         this.dataList = res;
         console.log(this.dataList.locations);
         this.chartDatasets[0].data = this.dataList.data;
         console.log('DATA:');
         console.log(this.chartDatasets[0].data);
         console.log('LOCATIONS:');
         this.chartLabels = this.dataList.locations;
         console.log(this.chartLabels);
      });
   }
  public chartHovered(e: any): void { }
 }
