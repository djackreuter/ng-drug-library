import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NdcProduct } from '../../classes/NdcProduct';

@Injectable()
export class DrugService {

  constructor(private http: HttpClient) { }

  drugUrl = 'http://localhost:3000/drugs/query?search=';
  drugInfoUrl = 'http://localhost:3000/drugs/specific_drug?search=';

  searchDrugs(searchQuery: string): Observable<NdcProduct[]> {
    return this.http.get<NdcProduct[]>(this.drugUrl + searchQuery);
  }

  getDrug(name: string): Observable<NdcProduct> {
    return this.http.get<NdcProduct>(this.drugInfoUrl + name);
  }

}
