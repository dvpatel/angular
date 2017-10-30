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

    vehicles: Observable<Array<Vehicle>> ;

    constructor(private vehicleService: VehicleService) {

        this.vehicles = vehicleService.vehicles;

        this.gridOptions = <GridOptions>{};

        this.columnDefs = [
            {headerName: "Make", field: "make", "editable":true},
            {headerName: "Model", field: "model", cellRendererFramework: RedComponentComponent, "editable":true},
            {headerName: "Price", field: "price", "editable":false}
        ];

    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

