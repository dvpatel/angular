import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HttpModule} from '@angular/http';

import {AgGridModule} from "ag-grid-angular/main";
import {AppComponent} from "./app.component";
import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";
import {RedComponentComponent} from "./red-component/red-component.component";

import {StoreModule} from '@ngrx/store';

import {vehicleReducer} from './common/stores/vehicles.store';
import {VehicleService} from "./common/services/vehicles.service";

//  import {columnDefReducer} from './common/stores/columndefs.store';
//import {ColumnDefService} from "./common/services/columndefs.service";

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AgGridModule.withComponents(
            [RedComponentComponent]
        ),
        StoreModule.provideStore({vehicles:vehicleReducer})
    ],
    providers: [VehicleService],
    bootstrap: [AppComponent]
})
export class AppModule { }
