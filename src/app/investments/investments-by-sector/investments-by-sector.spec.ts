import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsBySector } from './investments-by-sector';

describe('InvestmentsBySector', () => {
  let component: InvestmentsBySector;
  let fixture: ComponentFixture<InvestmentsBySector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsBySector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsBySector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
