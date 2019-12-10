import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TotalRevenueService } from './services/totalRevenue.service';
import { TotalCustomersService } from './services/totalCustomers.service';
import { TotalCarryoutService } from './services/totalCarryout.service';
import { TotalBarService } from './services/totalBar.service';

import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { DisplayTotalCustomersComponent } from './components/total-customers/total-customers.component';
import { DisplayTotalRevenueComponent } from './components/total-revenue/total-revenue.component';
import { DisplayTotalCarryoutComponent } from './components/total-carryout/total-carryout.component';
import { DisplayTotalBarComponent } from './components/total-bar/total-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    DisplayTotalCustomersComponent,
    DisplayTotalRevenueComponent,
    DisplayTotalCarryoutComponent,
    DisplayTotalBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TotalRevenueService,
    TotalCarryoutService,
    TotalCustomersService,
    TotalBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
