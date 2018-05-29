import { Component, OnInit } from '@angular/core';
import { DrugService } from '../../services/drug/drug.service';
import { NdcProduct } from '../../classes/ndc-product';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  dynamicSearchValue: Subject<string> = new Subject();
  drugs: NdcProduct[];

  constructor(private drugService: DrugService) { }

  ngOnInit() {
    this.dynamicSearchValue
      .debounceTime(1500)
      .subscribe((searchQuery) => this.getDrugs(searchQuery));
  }

  getDrugs(searchQuery: string): void {
    this.drugService.searchDrugs(searchQuery).subscribe((res) => {
      this.drugs = res;
    });
  } 

}
