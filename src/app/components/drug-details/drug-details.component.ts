import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DrugService } from '../../services/drug/drug.service';
import { NdcProduct } from '../../classes/NdcProduct';
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

  goBack(): void {
    this.location.back();
  }

}
