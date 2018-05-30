import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NdcProduct } from '../../classes/ndc-product';

@Injectable()
export class DrugService {

  constructor(private http: HttpClient) { }

  drugUrl = 'http://localhost:3000/drugs/query?search=';
  // drugInfoUrl = 'http://localhost:3000/drugs/specific_drug/';

  searchDrugs(searchQuery: string): Observable<NdcProduct[]> {
    return this.http.get<NdcProduct[]>(this.drugUrl + searchQuery);
  }

  // getDrug(id: string): Observable<NdcProduct> {
  //   return this.http.get<NdcProduct>(this.drugInfoUrl + id);
  // }

}
