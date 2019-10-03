import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrVisaComponent } from './pr-visa.component';

describe('PrVisaComponent', () => {
  let component: PrVisaComponent;
  let fixture: ComponentFixture<PrVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
