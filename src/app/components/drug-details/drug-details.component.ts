import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DrugService } from '../../services/drug/drug.service';
import { NdcProduct } from '../../classes/ndc-product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { quantityToTake, frequency, timeOfDay, durationToTake } from '../../classes/form-data';


@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {
  prescriptionForm: FormGroup;
  quantityToTake: number[] = quantityToTake;
  frequency: number[] = frequency;
  timeOfDay: string[] = timeOfDay;
  durationToTake: number[] = durationToTake;
  
  @Input() drug: NdcProduct;
  pillQuantity: number;
  ndcCode: string;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private drugService: DrugService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.pillQuantity = 0;
    this.ndcCode = this.drug.product_ndc;
  }

  changePillQuantity(): void {
    let quantity = this.prescriptionForm.get('quantityToTake').value;
    let frequency = this.prescriptionForm.get('frequency').value;
    let duration = this.prescriptionForm.get('duration').value;
    if(quantity !== null && frequency !== null && duration !== null) {
      this.pillQuantity = quantity * frequency * duration;
    }
  }

  createForm(): void {
    this.prescriptionForm = this.fb.group({
      quantityToTake: ['', Validators.required],
      frequency: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      asNeeded: false,
      notes: '',
      drugQuantity: '',
      ndcCode: '',
      refill: ['', Validators.required]
    });

  }

  goBack(): void {
    this.location.back();
  }

}
