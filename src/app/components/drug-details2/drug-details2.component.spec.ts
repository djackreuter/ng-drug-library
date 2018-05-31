import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugDetails2Component } from './drug-details2.component';

describe('DrugDetails2Component', () => {
  let component: DrugDetails2Component;
  let fixture: ComponentFixture<DrugDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
