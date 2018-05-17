import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DrugService {

  constructor(private http: HttpClient) { }

  drugUrl = 'http://localhost:3000/drugs/query?search=';

  searchDrugs(searchQuery): Observable<object> {
    return this.http.get(this.drugUrl + searchQuery);
  }

}
