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

//  Alerts element ;
import { MyModule } from './mymods/my.module';

//  import {columnDefReducer} from './common/stores/columndefs.store';
//import {ColumnDefService} from "./common/services/columndefs.service";

import {AlertsRenderer} from './my-grid-application/alerts-renderer.component' ;

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent,
        AlertsRenderer
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AgGridModule.withComponents(
            [RedComponentComponent, AlertsRenderer]
        ),
        StoreModule.provideStore({vehicles:vehicleReducer}),
        MyModule
    ],
    providers: [VehicleService],
    bootstrap: [AppComponent]
})
export class AppModule { }
