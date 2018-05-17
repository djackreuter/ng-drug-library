import { Component, OnInit } from '@angular/core';
import { DrugService } from '../../../services/drug/drug.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  searchQuery: string;
  results: object;

  constructor(private drugService: DrugService) { }

  ngOnInit() {
  }

  getDrugs(): void {
    this.drugService.searchDrugs(this.searchQuery).subscribe((res) => {
      this.results = res;
    });
  }

  onSearch(): void {
    this.getDrugs();
  }

}
