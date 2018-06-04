import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NdcProduct } from '../../classes/ndc-product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { quantityToTake, frequency, timeOfDay, durationToTake } from '../../classes/form-data';
import { DrugService } from '../../services/drug/drug.service';
import { DrugInfo } from '../../classes/drug-info';

@Component({
  selector: 'app-drug-details2',
  templateUrl: './drug-details2.component.html',
  styleUrls: ['../drug-details/drug-details.component.css']
})
export class DrugDetails2Component implements OnInit {

  @Input() drugInfo: DrugInfo;
  prescriptionForm2: FormGroup;
  quantityToTake: number[] = quantityToTake;
  frequency: number[] = frequency;
  timeOfDay: string[] = timeOfDay;
  durationToTake: number[] = durationToTake;
  pillQuantity: number;
  strengths: string[] = [];
  dosageStrength: any;
  isDisabled: boolean;
  ndcCode: NdcProduct;

  constructor(private fb: FormBuilder,
              private drugService: DrugService) { }

  ngOnInit() {
    this.drugInfo = new DrugInfo(null, null);
    this.createForm();
    this.pillQuantity = 0;
    this.isDisabled = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.firstChange && changes.drugInfo.currentValue !== undefined) {
      this.isDisabled = false;
    }
  }

  changePillQuantity(): void {
    let quantity = this.prescriptionForm2.get('quantityToTake').value;
    let frequency = this.prescriptionForm2.get('frequency').value;
    let duration = this.prescriptionForm2.get('duration').value;
    if(quantity !== null && frequency !== null && duration !== null) {
      this.pillQuantity = quantity * frequency * duration;
    }
  }

  getNdcCode(): void {
    let name = this.drugInfo.drug_name;
    let doseForm = this.prescriptionForm2.get('doseForm').value;
    let strength = this.prescriptionForm2.get('strength').value;
    let strengthNum = strength.split(' ');
    if(name !== null && doseForm !== null && strengthNum[0] !== null) {
      console.log(name, doseForm, strengthNum[0]);
      this.drugService.getNdcCode(name, doseForm, strengthNum[0]).subscribe((res) => {
        this.ndcCode = res;
      });
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
