import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsInformationComponent } from './investments-information.component';

describe('InvestmentsInformationComponent', () => {
  let component: InvestmentsInformationComponent;
  let fixture: ComponentFixture<InvestmentsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
