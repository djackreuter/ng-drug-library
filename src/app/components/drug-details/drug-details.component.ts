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

  drugName: string = this.route.snapshot.paramMap.get('name');
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
    this.drugService.getDrug(this.drugName).subscribe((res) => {
      this.drugs = res;
    });
  }

  selectDoseForm(doseFormName: string): void {
    this.selectedDoseForm = doseFormName;
    this.drugService.getDosage(this.drugName, this.selectedDoseForm).subscribe((res) => {
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
