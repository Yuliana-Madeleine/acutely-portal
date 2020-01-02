import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { InfoReportService } from './services/infoReports.service';
import { MapCustomerPotentialService } from './services/mapCustomerPotential.service';
import { MapRevenuePotentialService } from './services/mapRevenuePotential.service';

import { AppComponent } from './app.component';
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
import { NavbarFooterComponent } from './components/shared/navbar-footer/navbar-footer.component';

/* Http client module */
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
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
    NavbarHeaderComponent,
    NavbarFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    InfoReportService,
    MapCustomerPotentialService,
    MapRevenuePotentialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
