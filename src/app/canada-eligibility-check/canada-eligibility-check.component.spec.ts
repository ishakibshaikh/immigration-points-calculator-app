import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadaEligibilityCheckComponent } from './canada-eligibility-check.component';

describe('CanadaEligibilityCheckComponent', () => {
  let component: CanadaEligibilityCheckComponent;
  let fixture: ComponentFixture<CanadaEligibilityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaEligibilityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadaEligibilityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
