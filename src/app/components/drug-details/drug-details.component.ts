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

  goBack(): void {
    this.location.back();
  }

}
