import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVisaComponent } from './student-visa.component';

describe('StudentVisaComponent', () => {
  let component: StudentVisaComponent;
  let fixture: ComponentFixture<StudentVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
