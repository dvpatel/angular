import {Component} from "@angular/core";
import {RedComponentComponent} from "../red-component/red-component.component";

import {GridOptions} from "ag-grid/main";

import {Observable} from "rxjs/Observable";
import {Store} from '@ngrx/store';
import {AppStore} from '../common/models/appstore.model';
import {Vehicle} from '../common/models/vehicle.model';
import {ColumnDef} from '../common/models/columndef.model';

import {VehicleService} from '../common/services/vehicles.service';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;

    columnDefs: any[]

    vS: VehicleService ;
    vehicles: Observable<Array<Vehicle>> ;

    constructor(private vehicleService: VehicleService) {

        this.vS = vehicleService ;
        this.vehicles = vehicleService.vehicles;

        this.gridOptions = <GridOptions>{};

        this.columnDefs = [
            {headerName: "Id", field: "id", "editable":false},
            {headerName: "Make", field: "make", "editable":true},
            {headerName: "Model", field: "model", cellRendererFramework: RedComponentComponent, "editable":true},
            {headerName: "Price", field: "price", "editable":true}
        ];

    }

    onRowChanged(params) {
       var data = params.data ;
       var newVal = params.newValue ;
       var oldVal = params.oldValue ;

       //  POST update only on cell change ;
       if (!(newVal === oldVal)) {
         this.vS.updateVehicle(data) ;
       }
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

