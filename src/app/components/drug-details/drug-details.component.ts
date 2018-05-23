import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DrugService } from '../../services/drug/drug.service';
import { NdcProduct } from '../../classes/NdcProduct';
// import { PrescriptionData } from '../../classes/prescriptionData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { quantityToTake, frequency, timeOfDay, durationToTake, refills } from '../../classes/prescriptionData';


@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {
  prescriptionForm: FormGroup;
  quantityToTake: string[] = quantityToTake;
  frequency: string[] = frequency;
  timeOfDay: string[] = timeOfDay;
  durationToTake: string[] = durationToTake;
  refills: string[] = refills;

  drugName: string = this.route.snapshot.paramMap.get('name');
  drugs: NdcProduct;
  selectedDoseForm: string;
  dosageStrength: any;
  strengths: string[] = [];
  // scripData: PrescriptionData = new PrescriptionData;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private drugService: DrugService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getDrug();
    this.createForm();
  }

  createForm(): void {
    this.prescriptionForm = this.fb.group({
      drug: ['', Validators.required],
      strength: ['', Validators.required],
      quantityToTake: ['', Validators.required],
      frequency: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      notes: '',
      drugQuantity: ['', Validators.required],
      refill: ['', Validators.required]
    })
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
