import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaCalculatorComponent } from './australia-calculator.component';

describe('AustraliaCalculatorComponent', () => {
  let component: AustraliaCalculatorComponent;
  let fixture: ComponentFixture<AustraliaCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
