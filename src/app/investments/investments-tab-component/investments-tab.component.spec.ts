import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsTabComponent } from './investments-tab.component';

describe('InvestmentsAllocationDistributionComponent', () => {
  let component: InvestmentsTabComponent;
  let fixture: ComponentFixture<InvestmentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
