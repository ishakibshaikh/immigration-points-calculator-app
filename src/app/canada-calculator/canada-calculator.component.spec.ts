import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaCalculatorComponent } from './canada-calculator.component';

describe('CanadaCalculatorComponent', () => {
  let component: CanadaCalculatorComponent;
  let fixture: ComponentFixture<CanadaCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
