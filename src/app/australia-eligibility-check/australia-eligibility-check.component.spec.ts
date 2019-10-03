import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaEligibilityCheckComponent } from './australia-eligibility-check.component';

describe('AustraliaEligibilityCheckComponent', () => {
  let component: AustraliaEligibilityCheckComponent;
  let fixture: ComponentFixture<AustraliaEligibilityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaEligibilityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaEligibilityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
