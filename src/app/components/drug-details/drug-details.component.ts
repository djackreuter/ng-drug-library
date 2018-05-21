import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DrugService } from '../../services/drug/drug.service';


@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {

  drugs: object;
  selectedDoseForm: string;
  dosageStrength: object;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private drugService: DrugService) { }

  ngOnInit() {
    this.getDrug();
  }

  getDrug(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.drugService.getDrug(name).subscribe((res) => {
      this.drugs = res;
    });
  }

  selectDoseForm(selectedDoseForm: string): void {
    this.selectedDoseForm = selectedDoseForm;
    const selectedDrug = this.route.snapshot.paramMap.get('name');
    this.drugService.getDosage(selectedDrug, this.selectedDoseForm).subscribe((res) => {
      this.dosageStrength = res;
      console.log(this.dosageStrength);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
