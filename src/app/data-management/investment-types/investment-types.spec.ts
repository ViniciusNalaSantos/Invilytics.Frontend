import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentTypes } from './investment-types';

describe('InvestmentTypes', () => {
  let component: InvestmentTypes;
  let fixture: ComponentFixture<InvestmentTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
