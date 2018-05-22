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
  dosageStrength: any;
  strengths: string[] = [];

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

  selectDoseForm(doseFormName: string): void {
    const selectedDrug = this.route.snapshot.paramMap.get('name');
    this.selectedDoseForm = doseFormName;
    this.drugService.getDosage(selectedDrug, this.selectedDoseForm).subscribe((res) => {
      this.strengths = [];
      this.dosageStrength = res;
      for(let i = 0; i < this.dosageStrength.length; i++) {
        this.strengths.push(this.dosageStrength[i].join(' '));
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
