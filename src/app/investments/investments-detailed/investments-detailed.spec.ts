import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsDetailed } from './investments-detailed';

describe('InvestmentsDetailed', () => {
  let component: InvestmentsDetailed;
  let fixture: ComponentFixture<InvestmentsDetailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsDetailed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsDetailed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
