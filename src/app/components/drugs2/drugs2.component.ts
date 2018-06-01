import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NdcProduct } from '../../classes/ndc-product';
import { DrugService } from '../../services/drug/drug.service';

@Component({
  selector: 'app-drugs2',
  templateUrl: './drugs2.component.html',
  styleUrls: ['./drugs2.component.css']
})
export class Drugs2Component implements OnInit {

  dynamicSearchValue: Subject<string> = new Subject();
  drugs2: NdcProduct[];
  selectedDrug: object;
  drugClicked: boolean;

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

  getDrugInfo(drugName: string): void {
    this.drugService.getDrugInfo(drugName).subscribe((res) => {
      this.selectedDrug = res;
    });
    this.drugClicked = true;
  }

  resetInput(): void {
    this.drugClicked = false;
  }

}
