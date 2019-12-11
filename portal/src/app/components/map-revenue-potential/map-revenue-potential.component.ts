import { Component, OnInit } from '@angular/core';
import { MapRevenuePotentialService } from '../../services/mapRevenuePotential.service';

@Component({
  selector: 'app-map-revenue-potential',
  templateUrl: './map-revenue-potential.component.html'
})
export class MapRevenuePotentialComponent implements OnInit {

  constructor(private mapRevenuePotential: MapRevenuePotentialService) { }

  ngOnInit() {
  }

}
