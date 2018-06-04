import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NdcProduct } from '../../classes/ndc-product';
import { DrugInfo } from '../../classes/drug-info';

@Injectable()
export class DrugService {

  constructor(private http: HttpClient) { }

  drugUrl = 'http://localhost:3000/drugs/query?search=';
  drugInfoUrl = 'http://localhost:3000/drugs/specific_drug/';

  searchDrugs(searchQuery: string): Observable<NdcProduct[]> {
    return this.http.get<NdcProduct[]>(this.drugUrl + searchQuery);
  }

  searchDrugs2(drugName: string): Observable<NdcProduct[]> {
    return this.http.get<NdcProduct[]>(`http://localhost:3000/drugs/query_distinct?search=${drugName}`);
  }

  // getDrug(name: string): Observable<NdcProduct[]> {
  //   return this.http.get<NdcProduct[]>(this.drugInfoUrl + name);
  // }

  getDosage(drug: string, doseForm: string): Observable<NdcProduct> {
    return this.http.get<NdcProduct>(`http://localhost:3000/drugs/strength?search=${drug}&dose_form=${doseForm}`);
  }

  getDrugInfo(drugName: string): Observable<DrugInfo> {
    return this.http.get<DrugInfo>(`http://localhost:3000/drugs/drug_info?search=${drugName}`);
  }

}
