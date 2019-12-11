import { Component, OnInit } from '@angular/core';
import { MapCustomerPotentialService } from '../../services/mapCustomerPotential.service';

@Component({
  selector: 'app-map-customer-potential',
  templateUrl: './map-customer-potential.component.html'
})
export class MapCustomerPotentialComponent implements OnInit {

  constructor(private mapCustomerPotential: MapCustomerPotentialService) { }

  ngOnInit() {
  }

}
