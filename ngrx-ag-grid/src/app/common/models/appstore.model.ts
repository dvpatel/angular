import {Vehicle} from './vehicle.model';
import {ColumnDef} from './columndef.model';

export interface AppStore {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle;
  columndefs: ColumnDef[];
};
