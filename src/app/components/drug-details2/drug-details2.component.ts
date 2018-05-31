import { Component, OnInit, Input } from '@angular/core';
import { NdcProduct } from '../../classes/ndc-product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { quantityToTake, frequency, timeOfDay, durationToTake } from '../../classes/form-data';

@Component({
  selector: 'app-drug-details2',
  templateUrl: './drug-details2.component.html',
  styleUrls: ['../drug-details/drug-details.component.css']
})
export class DrugDetails2Component implements OnInit {

  @Input() drugOptions: NdcProduct[];
  prescriptionForm2: FormGroup;
  quantityToTake: number[] = quantityToTake;
  frequency: number[] = frequency;
  timeOfDay: string[] = timeOfDay;
  durationToTake: number[] = durationToTake;
  pillQuantity: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.pillQuantity = 0;
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

}
