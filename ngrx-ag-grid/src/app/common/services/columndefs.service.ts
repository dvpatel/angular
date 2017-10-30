import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {ColumnDef} from '../models/columndef.model';

const COLUMNDEF_URL = 'http://localhost:3000/vehicles/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ColumnDefService {
  columndefs: Observable<Array<ColumnDef>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.columndefs = store.select(state => state.columndefs);
  }

  loadColumnDef() {
    this.http.get(COLUMNDEF_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'LOAD_COLUMNS_DEFS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

}
