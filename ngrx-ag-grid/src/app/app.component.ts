import { Component } from '@angular/core';

import {VehicleService} from './common/services/vehicles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private vehicleService: VehicleService) {
        vehicleService.loadVehicles() ;
    }
}
