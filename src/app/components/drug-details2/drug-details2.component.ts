import { Component, OnInit, Input } from '@angular/core';
import { NdcProduct } from '../../classes/ndc-product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { quantityToTake, frequency, timeOfDay, durationToTake } from '../../classes/form-data';
import { DrugService } from '../../services/drug/drug.service';

@Component({
  selector: 'app-drug-details2',
  templateUrl: './drug-details2.component.html',
  styleUrls: ['../drug-details/drug-details.component.css']
})
export class DrugDetails2Component implements OnInit {

  @Input() drugInfo: object[];
  prescriptionForm2: FormGroup;
  quantityToTake: number[] = quantityToTake;
  frequency: number[] = frequency;
  timeOfDay: string[] = timeOfDay;
  durationToTake: number[] = durationToTake;
  pillQuantity: number;
  strengths: string[] = [];
  selectedDoseForm: string;
  dosageStrength: any;
  doseOptions: NdcProduct[];

  constructor(private fb: FormBuilder,
              private drugService: DrugService) { }

  ngOnInit() {
    // this.getDrugDoseOptions();
    this.drugInfo = [];
    this.createForm();
    this.pillQuantity = 0;
  }

  getDrugDoseOptions(): void {
    // console.log(this.drugs[0].proprietary_name);
    // let drugName = this.drugInfo[0];
    // this.drugService.getDrug(drugName).subscribe((res) => {
    //   this.doseOptions = res;
    //   console.log(this.drugInfo);
    // });
  }

  changePillQuantity(): void {
    let quantity = this.prescriptionForm2.get('quantityToTake').value;
    let frequency = this.prescriptionForm2.get('frequency').value;
    let duration = this.prescriptionForm2.get('duration').value;
    if(quantity !== null && frequency !== null && duration !== null) {
      this.pillQuantity = quantity * frequency * duration;
    }
  }

  createForm(): void {
    this.prescriptionForm2 = this.fb.group({
      quantityToTake: ['', Validators.required],
      doseForm: ['', Validators.required],
      strength: ['', Validators.required],
      frequency: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      asNeeded: false,
      notes: '',
      drugQuantity: '',
      refill: ['', Validators.required]
    });
  }

  selectDoseStrength(drugName: string, drugDose: string): void {
    // this.selectedDoseForm = drugDose;
    // this.drugName = drugName;
    this.drugService.getDosage(drugName, drugDose)
    .subscribe((res) => {
      this.strengths = [];
      this.dosageStrength = res;
      for(let i = 0; i < this.dosageStrength.length; i++) {
        this.strengths.push(this.dosageStrength[i].join(' '));
      }
    });
  }

}
