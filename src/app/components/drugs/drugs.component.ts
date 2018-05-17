import { Component, OnInit, TemplateRef } from '@angular/core';
import { DrugService } from '../../services/drug/drug.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {

  searchQuery: string;
  results: object;
  modalRef: BsModalRef;

  constructor(private drugService: DrugService,
              private modalService: BsModalService) { }

  ngOnInit() {
  }

  getDrugs(): void {
    this.drugService.searchDrugs(this.searchQuery).subscribe((res) => {
      this.results = res;
    });
  }

  onSearch(): void {
    this.getDrugs();
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}
