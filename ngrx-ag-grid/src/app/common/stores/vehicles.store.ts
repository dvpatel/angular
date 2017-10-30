import { ActionReducer, Action } from '@ngrx/store';

export const GET_VEHICLES = 'GET_VEHICLES';
export const CREATE_VEHICLE = 'CREATE_VEHICLE';
export const UPDATE_VEHICLE = 'UPDATE_VEHICLE';
export const DELETE_VEHICLE = 'DELETE_VEHICLE';

export function vehicleReducer(state: any = [], action: Action) {
  switch (action.type) {
    case GET_VEHICLES:
      return action.payload;
    case CREATE_VEHICLE:
      return [...state, action.payload];
    case UPDATE_VEHICLE:
      return state.map(vehicle => {
        return vehicle.make === action.payload.make ? Object.assign({}, vehicle, action.payload) : vehicle;
      });
    case DELETE_VEHICLE:
      return state.filter(vehicle => {
        return vehicle.make !== action.payload.make;
      });
    default:
      return state;
  }
};
