import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentSectors } from './investment-sectors';

describe('InvestmentSectors', () => {
  let component: InvestmentSectors;
  let fixture: ComponentFixture<InvestmentSectors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentSectors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentSectors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
