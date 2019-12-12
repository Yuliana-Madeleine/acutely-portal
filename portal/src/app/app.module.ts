import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TotalRevenueService } from './services/totalRevenue.service';
import { TotalCustomersService } from './services/totalCustomers.service';
import { TotalCarryoutService } from './services/totalCarryout.service';
import { TotalBarService } from './services/totalBar.service';
import { MapCustomerPotentialService } from './services/mapCustomerPotential.service';
import { MapRevenuePotentialService } from './services/mapRevenuePotential.service';

import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { DisplayTotalCustomersComponent } from './components/total-customers/total-customers.component';
import { DisplayTotalRevenueComponent } from './components/total-revenue/total-revenue.component';
import { DisplayTotalCarryoutComponent } from './components/total-carryout/total-carryout.component';
import { DisplayTotalBarComponent } from './components/total-bar/total-bar.component';
import { MapCustomerPotentialComponent } from './components/map-customer-potential/map-customer-potential.component';
import { MapRevenuePotentialComponent } from './components/map-revenue-potential/map-revenue-potential.component';
import { MenuCustomerOverviewComponent } from './components/menu-customer-overview/menu-customer-overview.component';
import { MenuReportsComponent } from './components/menu-reports/menu-reports.component';
import { MenuCompareLocationsComponent } from './components/menu-compare-locations/menu-compare-locations.component';
import { MenuDemographicsComponent } from './components/menu-demographics/menu-demographics.component';
import { NavbarHeaderComponent } from './components/shared/navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    DisplayTotalCustomersComponent,
    DisplayTotalRevenueComponent,
    DisplayTotalCarryoutComponent,
    DisplayTotalBarComponent,
    MapCustomerPotentialComponent,
    MapRevenuePotentialComponent,
    MenuCustomerOverviewComponent,
    MenuReportsComponent,
    MenuCompareLocationsComponent,
    MenuDemographicsComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TotalRevenueService,
    TotalCarryoutService,
    TotalCustomersService,
    TotalBarService,
    MapCustomerPotentialService,
    MapRevenuePotentialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
