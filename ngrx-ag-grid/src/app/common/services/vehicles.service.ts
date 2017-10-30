import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {Vehicle} from '../models/vehicle.model';
import {ColumnDef} from '../models/columndef.model';

const VEHICLE_URL = 'http://localhost:3000/vehicles/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class VehicleService {
  vehicles: Observable<Array<Vehicle>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.vehicles = store.select(state => state.vehicles);
  }

  loadVehicles() {
    this.http.get(VEHICLE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'GET_VEHICLES', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveItem(vehicle: Vehicle) {
    (vehicle.make) ? this.updateVehicle(vehicle) : this.createVehicle(vehicle);
  }

  createVehicle(vehicle: Vehicle) {
    this.http.post(`${VEHICLE_URL}`, JSON.stringify(vehicle), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_VEHICLE', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateVehicle(vehicle: Vehicle) {
    this.http.put(`${VEHICLE_URL}${vehicle.make}`, JSON.stringify(vehicle), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_VEHICLE', payload: vehicle }));
  }

  deleteVehicle(vehicle: Vehicle) {
    this.http.delete(`${VEHICLE_URL}${vehicle.make}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_VEHICLE', payload: vehicle }));
  }
}
