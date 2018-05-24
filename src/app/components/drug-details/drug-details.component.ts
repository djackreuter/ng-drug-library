import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DrugService } from '../../services/drug/drug.service';
import { NdcProduct } from '../../classes/NdcProduct';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { quantityToTake, frequency, timeOfDay, durationToTake } from '../../classes/prescriptionData';


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
  
  drug: NdcProduct;

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
    });
  }

  getDrug(): void {
    const drugId: string = this.route.snapshot.paramMap.get('id');
    this.drugService.getDrug(drugId).subscribe((res) => {
      this.drug = res;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
