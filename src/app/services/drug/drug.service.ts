import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DrugService {

  constructor(private http: HttpClient) { }

  drugUrl = 'http://localhost:3000/drugs/query?search=';
  drugInfoUrl = 'http://localhost:3000/drugs/specific_drug?search=';

  searchDrugs(searchQuery: string): Observable<object> {
    return this.http.get(this.drugUrl + searchQuery);
  }

  getDrug(name: string): Observable<object> {
    return this.http.get(this.drugInfoUrl + name);
  }

  getDosage(drug: string, doseForm: string): Observable<object> {
    return this.http.get(`http://localhost:3000/drugs/strength?search=${drug}&dose_form=${doseForm}`);
  }

}
