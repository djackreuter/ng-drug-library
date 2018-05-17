import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {

  @Input() drug: object;

  constructor() { }

  ngOnInit() {
  }

}
