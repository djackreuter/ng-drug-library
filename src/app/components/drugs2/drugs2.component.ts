import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NdcProduct } from '../../classes/ndc-product';
import { DrugService } from '../../services/drug/drug.service';

@Component({
  selector: 'app-drugs2',
  templateUrl: './drugs2.component.html',
  styleUrls: ['../drugs/drugs.component.css']
})
export class Drugs2Component implements OnInit {

  dynamicSearchValue: Subject<string> = new Subject();
  drugs2: NdcProduct[];
  selectedDrugInfo: NdcProduct[];

  constructor(private drugService: DrugService) { }

  ngOnInit() {
    this.dynamicSearchValue.debounceTime(500)
      .subscribe((name) => {
        this.getDrugs2(name);
      });
  }

  getDrugs2(name: string): void {
    if(name !== '') {
      this.drugService.searchDrugs2(name).subscribe((res) => {
        this.drugs2 = res;
      });
    }
  }

  getDrugInfo(drug: string): void {
    this.drugService.searchDrugs(drug).subscribe((res) => {
      this.selectedDrugInfo = res;
    });
  }

}
