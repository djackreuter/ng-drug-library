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

  isLoading: boolean = false;
  dynamicSearchValue: Subject<string> = new Subject();
  drugs: NdcProduct[];
  selectedDrug: NdcProduct;

  constructor(private drugService: DrugService) { }

  ngOnInit() {
    this.dynamicSearchValue
      .debounceTime(500)
      .subscribe((searchQuery) => {
        this.selectedDrug = null;
        this.getDrugs(searchQuery)
      });
  }

  getDrugs(searchQuery: string): void {
    if(searchQuery !== '') {
      this.isLoading = true;
      this.drugService.searchDrugs(searchQuery).subscribe((res) => {
        this.drugs = res;
        this.isLoading = false;
      });
    }
  }
  
  chooseDrug(drug: NdcProduct): void {
    this.selectedDrug = drug;
    this.drugs = [];
  }

}
