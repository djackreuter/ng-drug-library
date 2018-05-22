import { Component, OnInit } from '@angular/core';
import { DrugService } from '../../services/drug/drug.service';
import { NdcProduct } from '../../classes/NdcProduct';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  searchQuery: string;
  drugs: NdcProduct[];

  constructor(private drugService: DrugService) { }

  ngOnInit() {
  }

  getDrugs(): void {
    this.drugService.searchDrugs(this.searchQuery).subscribe((res) => {
      this.drugs = res;
    });
  }

  onSearch(): void {
    this.getDrugs();
  }

}
