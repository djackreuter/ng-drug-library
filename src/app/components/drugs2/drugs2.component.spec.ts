import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Drugs2Component } from './drugs2.component';

describe('Drugs2Component', () => {
  let component: Drugs2Component;
  let fixture: ComponentFixture<Drugs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drugs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drugs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
