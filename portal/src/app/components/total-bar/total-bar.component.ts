import { Component, OnInit } from '@angular/core';
import { InfoReportService } from '../../services/infoReports.service';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-total-bar',
  templateUrl: './total-bar.component.html'
})

export class DisplayTotalBarComponent implements OnInit {
  dataList: any = [];

  public chartType = 'bar';
  public chartDatasets: Array<any> = [
    { data: [], label: 'Bar' }
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
      this.infoReportService.GetTotalBar().subscribe(res => {
         this.dataList = res;
         this.chartDatasets[0].data = this.dataList.data;
         this.chartLabels = this.dataList.locations;
      });
   }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
 }
